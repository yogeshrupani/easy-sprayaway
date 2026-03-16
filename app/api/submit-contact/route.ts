import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email Configuration - using SMTP
const SMTP_HOST = process.env.SMTP_HOST || ""
const SMTP_PORT = Number.parseInt(process.env.SMTP_PORT || "587")
const SMTP_USER = process.env.SMTP_USER || ""
const SMTP_PASS = process.env.SMTP_PASS || ""
const FROM_EMAIL = process.env.FROM_EMAIL || "info@easy-sprayaway.co.uk"
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "info@easy-sprayaway.co.uk"

// Professional email template for contact form admin notification
function generateContactAdminEmailHTML(data: any) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Easy-Sprayaway</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f8f9fa;
      }
      .container {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px;
      }
      .header {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        padding: 30px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
      }
      .content {
        padding: 30px;
      }
      .section {
        margin-bottom: 25px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #28a745;
      }
      .section h3 {
        margin: 0 0 15px 0;
        color: #28a745;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .field {
        margin-bottom: 12px;
      }
      .field strong {
        color: #333;
        font-weight: 600;
        display: inline-block;
        min-width: 140px;
      }
      .priority {
        background: #fff3cd;
        border-left-color: #ffc107;
        border: 1px solid #ffeaa7;
      }
      .footer {
        background: #f8f9fa;
        padding: 20px 30px;
        text-align: center;
        font-size: 14px;
        color: #666;
        border-top: 1px solid #e9ecef;
      }
      .cta-button {
        display: inline-block;
        background: #28a745;
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        margin: 10px 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📞 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">From Contact Page</p>
      </div>
      
      <div class="content">
        <div class="section priority">
          <h3>⚡ Priority Information</h3>
          <div class="field"><strong>Service:</strong> ${data.service}</div>
          <div class="field"><strong>Contact Preference:</strong> ${data.contactPreference || "Not specified"}</div>
          <div class="field"><strong>Location:</strong> ${data.postcode}</div>
          <div class="field"><strong>Submitted:</strong> ${new Date().toLocaleString("en-GB")}</div>
        </div>

        <div class="section">
          <h3>👤 Customer Details</h3>
          <div class="field"><strong>Name:</strong> ${data.name}</div>
          <div class="field"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></div>
          <div class="field"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></div>
          <div class="field"><strong>Address:</strong> ${data.address || "Not provided"}</div>
          <div class="field"><strong>Postcode:</strong> ${data.postcode}</div>
        </div>

        <div class="section">
          <h3>💬 Customer Message</h3>
          <p style="margin: 0; padding: 15px; background: white; border-radius: 6px; border: 1px solid #e9ecef;">${data.message}</p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="tel:${data.phone}" class="cta-button">📞 Call Customer</a>
          <a href="mailto:${data.email}" class="cta-button">✉️ Email Customer</a>
        </div>
      </div>

      <div class="footer">
        <p><strong>Easy-Sprayaway</strong> - Professional Home Services</p>
        <p>This contact form was submitted through your website and requires follow-up within 24 hours.</p>
      </div>
    </div>
  </body>
  </html>
`
}

// Customer confirmation email template
function generateCustomerConfirmationHTML(data: any) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - Easy-Sprayaway</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f8f9fa;
      }
      .container {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 20px;
      }
      .header {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        padding: 40px 30px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
      }
      .content {
        padding: 40px 30px;
      }
      .highlight-box {
        background: linear-gradient(135deg, #e8f5e8 0%, #f0f9ff 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 1px solid #d4edda;
      }
      .contact-info {
        background: #fff3e0;
        padding: 20px;
        border-radius: 8px;
        margin: 25px 0;
        text-align: center;
      }
      .contact-info h3 {
        color: #f57c00;
        margin: 0 0 15px 0;
      }
      .phone-number {
        font-size: 24px;
        font-weight: bold;
        color: #28a745;
        text-decoration: none;
      }
      .footer {
        background: #f8f9fa;
        padding: 30px;
        text-align: center;
        font-size: 14px;
        color: #666;
        border-top: 1px solid #e9ecef;
      }
      ul {
        padding-left: 20px;
      }
      li {
        margin-bottom: 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>✅ Thank You, ${data.name}!</h1>
        <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">Your message has been received</p>
      </div>
      
      <div class="content">
        <div class="highlight-box">
          <h2 style="margin: 0 0 15px 0; color: #28a745;">🎉 We appreciate you contacting us!</h2>
          <p style="margin: 0; font-size: 16px;">Thank you for reaching out to Easy-Sprayaway. We've received your message and our team will respond to you shortly.</p>
        </div>

        <h3 style="color: #28a745;">⏰ What Happens Next?</h3>
        <ul>
          <li><strong>Within 24 hours:</strong> One of our friendly team members will contact you</li>
          <li><strong>Free Survey:</strong> We'll arrange a convenient time for your free, no-obligation survey</li>
          <li><strong>Detailed Quote:</strong> You'll receive a comprehensive quote tailored to your needs</li>
          <li><strong>Professional Service:</strong> If you proceed, our certified team will deliver exceptional results</li>
        </ul>

        <div class="contact-info">
          <h3>🚨 Need to speak to us urgently?</h3>
          <p>Call us directly on:</p>
          <a href="tel:08004332068" class="phone-number">0800 433 2068</a>
          <p style="margin: 10px 0 0 0; font-size: 14px;">Monday - Friday: 8:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 4:00 PM</p>
        </div>

        <h3 style="color: #28a745;">🏆 Why Choose Easy-Sprayaway?</h3>
        <ul>
          <li>✅ <strong>Family-run business</strong> since 2016</li>
          <li>✅ <strong>Fully certified</strong> and insured</li>
          <li>✅ <strong>10-year warranty</strong> on our work</li>
          <li>✅ <strong>Free, no-obligation</strong> surveys</li>
          <li>✅ <strong>Trusted by thousands</strong> of Scottish homeowners</li>
        </ul>
      </div>

      <div class="footer">
        <p><strong>Easy-Sprayaway</strong></p>
        <p>Professional Home Services Across Scotland</p>
        <p>Serving Glasgow, Edinburgh, Aberdeen, Perth, Inverness, Dundee, Ayrshire, and surrounding areas</p>
        <p style="font-size: 12px; margin-top: 20px;">
          This email was sent because you submitted a contact form on our website.<br>
          © ${new Date().getFullYear()} Easy-Sprayaway. All rights reserved.
        </p>
      </div>
    </div>
  </body>
  </html>
`
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `Easy-Sprayaway Website <${FROM_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: `📞 Contact Form: ${data.service} - ${data.name} (${data.postcode})`,
      html: generateContactAdminEmailHTML(data),
      replyTo: data.email,
    })

    await transporter.sendMail({
      from: `Easy-Sprayaway <${FROM_EMAIL}>`,
      to: data.email,
      subject: `Thank you for contacting Easy-Sprayaway`,
      html: generateCustomerConfirmationHTML(data),
    })

    // Log form submission
    console.log("📝 Contact Form Submission (via SMTP):", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      postcode: data.postcode,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully! We'll be in touch shortly.",
    })
  } catch (error) {
    console.error("Error processing contact form with SMTP:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json(
      {
        success: false,
        error: `Failed to process your request. Please try again or call us at 0800 433 2068. Error: ${errorMessage}`,
      },
      { status: 500 },
    )
  }
}
