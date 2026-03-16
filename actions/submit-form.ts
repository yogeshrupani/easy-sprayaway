"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Email configuration
const SMTP_EMAIL = process.env.SMTP_EMAIL || "notifications@easy-sprayaway.co.uk"
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "your-smtp-password"
const RECIPIENT_EMAIL = "info@something-easy.co.uk"

// Create a transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
})

// Form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().optional(),
  postcode: z.string().min(5, { message: "Please enter a valid postcode" }),
  service: z.string(),
  contactPreference: z.enum(["email", "phone", "either"]).optional(),
  message: z.string(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy policy",
  }),
  formType: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Function to generate HTML email content
function generateEmailHTML(data: ContactFormData) {
  const formType = data.formType || "Contact Form"

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          border: 1px solid #e1e1e1;
          border-radius: 5px;
          padding: 20px;
          margin-top: 20px;
        }
        .header {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px 5px 0 0;
          border-bottom: 2px solid #0070f3;
          margin-bottom: 20px;
        }
        .header h1 {
          margin: 0;
          color: #0070f3;
          font-size: 24px;
        }
        .section {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f0f0f0;
        }
        .section:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #555;
          margin-bottom: 5px;
        }
        .value {
          margin-top: 5px;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #777;
          text-align: center;
        }
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo img {
          max-width: 200px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${formType} Submission</h1>
        </div>
        
        <div class="section">
          <div class="label">Personal Information:</div>
          <div class="value"><strong>Name:</strong> ${data.name}</div>
          <div class="value"><strong>Email:</strong> ${data.email}</div>
          <div class="value"><strong>Phone:</strong> ${data.phone}</div>
          ${data.contactPreference ? `<div class="value"><strong>Preferred Contact Method:</strong> ${data.contactPreference}</div>` : ""}
        </div>
        
        <div class="section">
          <div class="label">Property Details:</div>
          ${data.address ? `<div class="value"><strong>Address:</strong> ${data.address}</div>` : ""}
          <div class="value"><strong>Postcode:</strong> ${data.postcode}</div>
        </div>
        
        <div class="section">
          <div class="label">Service Information:</div>
          <div class="value"><strong>Service Required:</strong> ${data.service}</div>
          <div class="value"><strong>Message:</strong> ${data.message}</div>
        </div>
        
        <div class="footer">
          <p>This is an automated email from the Easy-Sprayaway website.</p>
          <p>© ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Function to generate plain text email content (as fallback)
function generatePlainTextEmail(data: ContactFormData) {
  const formType = data.formType || "Contact Form"

  return `
    New ${formType} Submission
    
    Personal Information:
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    ${data.contactPreference ? `Preferred Contact Method: ${data.contactPreference}` : ""}
    
    Property Details:
    ${data.address ? `Address: ${data.address}` : ""}
    Postcode: ${data.postcode}
    
    Service Information:
    Service Required: ${data.service}
    Message: ${data.message}
    
    This is an automated email from the Easy-Sprayaway website.
    © ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.
  `
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Prepare email
    const mailOptions = {
      from: `"Easy-Sprayaway Website" <${SMTP_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: `New ${validatedData.formType || "Contact Form"} Submission from ${validatedData.name}`,
      text: generatePlainTextEmail(validatedData),
      html: generateEmailHTML(validatedData),
      replyTo: validatedData.email,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    // Send confirmation email to the customer
    const customerMailOptions = {
      from: `"Easy-Sprayaway" <${SMTP_EMAIL}>`,
      to: validatedData.email,
      subject: `Thank you for contacting Easy-Sprayaway`,
      text: `Dear ${validatedData.name},\n\nThank you for contacting Easy-Sprayaway. We have received your enquiry and will get back to you shortly.\n\nBest regards,\nThe Easy-Sprayaway Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .container {
              border: 1px solid #e1e1e1;
              border-radius: 5px;
              padding: 20px;
              margin-top: 20px;
            }
            .header {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 5px 5px 0 0;
              border-bottom: 2px solid #0070f3;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              color: #0070f3;
              font-size: 24px;
            }
            .content {
              padding: 20px 0;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us</h1>
            </div>
            
            <div class="content">
              <p>Dear ${validatedData.name},</p>
              <p>Thank you for contacting Easy-Sprayaway. We have received your enquiry and will get back to you shortly.</p>
              <p>If you have any urgent questions, please don't hesitate to call us at <strong>0800 433 2068</strong>.</p>
              <p>Best regards,<br>The Easy-Sprayaway Team</p>
            </div>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(customerMailOptions)

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email. Please try again." }
  }
}
