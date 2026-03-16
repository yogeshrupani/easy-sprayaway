import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email Configuration - using SMTP
const SMTP_HOST = process.env.SMTP_HOST || ""
const SMTP_PORT = Number.parseInt(process.env.SMTP_PORT || "587")
const SMTP_USER = process.env.SMTP_USER || ""
const SMTP_PASS = process.env.SMTP_PASS || ""
const FROM_EMAIL = process.env.FROM_EMAIL || "info@easy-sprayaway.co.uk"
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "info@easy-sprayaway.co.uk"

// Professional email template for enquiry form admin notification
function generateEnquiryAdminEmailHTML(data: any) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Survey Enquiry - Easy-Sprayaway</title>
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
        background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
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
        border-left: 4px solid #0070f3;
      }
      .section h3 {
        margin: 0 0 15px 0;
        color: #0070f3;
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
        min-width: 120px;
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
        background: #0070f3;
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
        <h1>🏠 New Survey Enquiry</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">From ${data.formType || "Hero Form"}</p>
      </div>
      
      <div class="content">
        <div class="section priority">
          <h3>⚡ Priority Information</h3>
          <div class="field"><strong>Service:</strong> ${data.service}</div>
          <div class="field"><strong>Location:</strong> ${data.postcode}</div>
          <div class="field"><strong>Source:</strong> ${data.formType || "Hero Form"}</div>
          <div class="field"><strong>Submitted:</strong> ${new Date().toLocaleString("en-GB")}</div>
        </div>

        <div class="section">
          <h3>👤 Customer Details</h3>
          <div class="field"><strong>Name:</strong> ${data.name}</div>
          <div class="field"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></div>
          ${data.email ? `<div class="field"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></div>` : ""}
          <div class="field"><strong>Postcode:</strong> ${data.postcode}</div>
        </div>

        ${
          data.message
            ? `
        <div class="section">
          <h3>💬 Customer Message</h3>
          <p style="margin: 0; padding: 15px; background: white; border-radius: 6px; border: 1px solid #e9ecef;">${data.message}</p>
        </div>
        `
            : ""
        }


        <div style="text-align: center; margin: 30px 0;">
          <a href="tel:${data.phone}" class="cta-button">📞 Call Customer</a>
          ${data.email ? `<a href="mailto:${data.email}" class="cta-button">✉️ Email Customer</a>` : ""}
        </div>
      </div>

      <div class="footer">
        <p><strong>Easy-Sprayaway</strong> - Professional Home Services</p>
        <p>This **enquiry** was submitted through your website hero form and requires follow-up within 24 hours.</p>
      </div>
    </div>
  </body>
  </html>
`
}

// Customer confirmation email template for enquiry form
function generateEnquiryCustomerConfirmationHTML(data: any) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You For Your **Enquiry** - Easy-Sprayaway</title>
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
        background: linear-gradient(135deg, #0070f3 0%, #0051cc 100%);
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
        background: linear-gradient(135deg, #e6f2ff 0%, #f0f9ff 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 1px solid #cce5ff;
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
        color: #0070f3;
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
        <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">Your Survey **Enquiry** Has Been Received</p>
      </div>
      
      <div class="content">
        <div class="highlight-box">
          <h2 style="margin: 0 0 15px 0; color: #0070f3;">🎉 We've Got Your **Enquiry**!</h2>
          <p style="margin: 0; font-size: 16px;">Thank you for requesting a free survey with Easy-Sprayaway. Our team will be in touch very soon to arrange a convenient time.</p>
        </div>

        <h3 style="color: #0070f3;">🗓️ What's Next?</h3>
        <ul>
          <li><strong>Quick Contact:</strong> Expect a call or message from us within 24 business hours.</li>
          <li><strong>Survey Scheduling:</strong> We'll work with you to find the best time for your free, no-obligation property survey.</li>
          <li><strong>Expert Assessment:</strong> Our **specialist** will visit your property to provide a thorough assessment and **tailored** advice.</li>
          <li><strong>Detailed Quote:</strong> You'll receive a clear, **itemised** quote with no hidden fees.</li>
        </ul>

        <div class="contact-info">
          <h3>🚨 Urgent Questions?</h3>
          <p>Call us directly on our freephone number:</p>
          <a href="tel:08004332068" class="phone-number">0800 433 2068</a>
          <p style="margin: 10px 0 0 0; font-size: 14px;">Our lines are open 7 days a week, 9 AM - 5 PM.</p>
        </div>
      </div>

      <div class="footer">
        <p><strong>Easy-Sprayaway</strong></p>
        <p>Your Trusted Partner for Home Efficiency and Maintenance</p>
        <p style="font-size: 12px; margin-top: 20px;">
          This email confirms your survey **enquiry** submitted via our website.<br>
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

    // Validate required fields for enquiry form
    if (!data.name || !data.phone || !data.service || !data.postcode) {
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
      subject: `🏠 Survey Enquiry: ${data.service} - ${data.name} (${data.postcode})`,
      html: generateEnquiryAdminEmailHTML(data),
      replyTo: data.email || undefined,
    })

    if (data.email) {
      await transporter.sendMail({
        from: `Easy-Sprayaway <${FROM_EMAIL}>`,
        to: data.email,
        subject: `Thank You For Your Enquiry - Easy-Sprayaway`,
        html: generateEnquiryCustomerConfirmationHTML(data),
      })
    }

    // Log form submission
    console.log("📝 Enquiry Form Submission (via SMTP):", {
      name: data.name,
      phone: data.phone,
      email: data.email || "Not provided",
      service: data.service,
      postcode: data.postcode,
      formType: data.formType || "Hero Form",
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! We'll contact you shortly to arrange your free survey.",
    })
  } catch (error) {
    console.error("Error processing enquiry form with SMTP:", error)
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
