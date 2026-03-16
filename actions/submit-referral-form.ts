"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Email configuration
const SMTP_EMAIL = process.env.SMTP_EMAIL || "notifications@easy-sprayaway.co.uk"
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "your-smtp-password"
const RECIPIENT_EMAIL = "info@something-easy.co.uk"

// Create a transporter
const transporter = nodemailer.createTransporter({
  host: "smtp.gmail.com", // Replace with your SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
})

// Referral form schema
const referralFormSchema = z.object({
  yourName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  yourEmail: z.string().email({ message: "Please enter a valid email address" }),
  yourPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  friendName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  friendEmail: z.string().email({ message: "Please enter a valid email address" }),
  friendPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to our privacy policy",
  }),
  friendConsent: z.boolean().refine((val) => val === true, {
    message: "You must confirm you have your friend's permission",
  }),
})

export type ReferralFormData = z.infer<typeof referralFormSchema>

// Function to generate HTML email content for referral
function generateReferralEmailHTML(data: ReferralFormData) {
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
        .reward-highlight {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
          text-align: center;
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
          <h1>New Referral Submission - £250 Reward Program</h1>
        </div>
        
        <div class="reward-highlight">
          <h2 style="margin: 0; color: #856404;">💰 £250 Referral Reward Opportunity</h2>
          <p style="margin: 5px 0 0 0; color: #856404;">Process this referral to unlock the reward program</p>
        </div>
        
        <div class="section">
          <div class="label">Referrer Information:</div>
          <div class="value"><strong>Name:</strong> ${data.yourName}</div>
          <div class="value"><strong>Email:</strong> ${data.yourEmail}</div>
          <div class="value"><strong>Phone:</strong> ${data.yourPhone}</div>
        </div>
        
        <div class="section">
          <div class="label">Friend Being Referred:</div>
          <div class="value"><strong>Name:</strong> ${data.friendName}</div>
          <div class="value"><strong>Email:</strong> ${data.friendEmail}</div>
          <div class="value"><strong>Phone:</strong> ${data.friendPhone}</div>
        </div>
        
        ${
          data.message
            ? `
        <div class="section">
          <div class="label">Personal Message:</div>
          <div class="value">${data.message}</div>
        </div>
        `
            : ""
        }
        
        <div class="section">
          <div class="label">Consent Confirmations:</div>
          <div class="value">✅ Referrer agreed to privacy policy and terms</div>
          <div class="value">✅ Referrer confirmed friend's permission to share contact details</div>
        </div>
        
        <div class="section">
          <div class="label">Next Steps:</div>
          <div class="value">1. Contact ${data.friendName} to arrange a free survey</div>
          <div class="value">2. Track project completion for £250 reward eligibility</div>
          <div class="value">3. Process reward payment to ${data.yourName} after project completion (min. £1,000)</div>
        </div>
        
        <div class="footer">
          <p>This is an automated email from the Easy-Sprayaway referral system.</p>
          <p>© ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Function to generate plain text email content
function generateReferralPlainTextEmail(data: ReferralFormData) {
  return `
    New Referral Submission - £250 Reward Program
    
    💰 £250 REFERRAL REWARD OPPORTUNITY
    Process this referral to unlock the reward program
    
    Referrer Information:
    Name: ${data.yourName}
    Email: ${data.yourEmail}
    Phone: ${data.yourPhone}
    
    Friend Being Referred:
    Name: ${data.friendName}
    Email: ${data.friendEmail}
    Phone: ${data.friendPhone}
    
    ${data.message ? `Personal Message: ${data.message}` : ""}
    
    Consent Confirmations:
    ✅ Referrer agreed to privacy policy and terms
    ✅ Referrer confirmed friend's permission to share contact details
    
    Next Steps:
    1. Contact ${data.friendName} to arrange a free survey
    2. Track project completion for £250 reward eligibility
    3. Process reward payment to ${data.yourName} after project completion (min. £1,000)
    
    This is an automated email from the Easy-Sprayaway referral system.
    © ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.
  `
}

export async function submitReferralForm(formData: ReferralFormData) {
  try {
    // Validate form data
    const validatedData = referralFormSchema.parse(formData)

    // Prepare email to admin
    const adminMailOptions = {
      from: `"Easy-Sprayaway Referrals" <${SMTP_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: `New £250 Referral: ${validatedData.yourName} referred ${validatedData.friendName}`,
      text: generateReferralPlainTextEmail(validatedData),
      html: generateReferralEmailHTML(validatedData),
      replyTo: validatedData.yourEmail,
    }

    // Send email to admin
    const adminInfo = await transporter.sendMail(adminMailOptions)

    // Send confirmation email to the referrer
    const referrerMailOptions = {
      from: `"Easy-Sprayaway" <${SMTP_EMAIL}>`,
      to: validatedData.yourEmail,
      subject: `Thank you for your referral - £250 reward pending`,
      text: `Dear ${validatedData.yourName},\n\nThank you for referring ${validatedData.friendName} to Easy-Sprayaway! We'll contact them shortly to arrange a free survey.\n\nOnce they complete a project with us (minimum £1,000), you'll receive your £250 reward within 30 days.\n\nBest regards,\nThe Easy-Sprayaway Team`,
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
            .reward-box {
              background-color: #d4edda;
              border: 1px solid #c3e6cb;
              border-radius: 5px;
              padding: 15px;
              margin: 20px 0;
              text-align: center;
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
              <h1>Thank You for Your Referral!</h1>
            </div>
            
            <div class="reward-box">
              <h2 style="margin: 0; color: #155724;">💰 £250 Reward Pending</h2>
              <p style="margin: 5px 0 0 0; color: #155724;">You're eligible for £250 when ${validatedData.friendName} completes their project</p>
            </div>
            
            <div class="content">
              <p>Dear ${validatedData.yourName},</p>
              <p>Thank you for referring <strong>${validatedData.friendName}</strong> to Easy-Sprayaway! We'll contact them shortly to arrange a free survey.</p>
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>We'll contact ${validatedData.friendName} within 24 hours</li>
                <li>We'll arrange a free, no-obligation survey</li>
                <li>If they proceed with a project (minimum £1,000), you'll receive your £250 reward</li>
                <li>Reward payment will be processed within 30 days of project completion</li>
              </ul>
              <p>If you have any questions about the referral program, please don't hesitate to contact us at <strong>0800 433 2068</strong>.</p>
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

    await transporter.sendMail(referrerMailOptions)

    return { success: true, messageId: adminInfo.messageId }
  } catch (error) {
    console.error("Error sending referral email:", error)
    return { success: false, error: "Failed to send referral. Please try again." }
  }
}
