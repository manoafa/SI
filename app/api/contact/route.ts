import { NextRequest, NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// Explicitly load environment variables
// import { config } from 'dotenv'
// import path from 'path'

// Load .env.local first, then .env
// config({ path: path.resolve(process.cwd(), '.env.local') })
// config({ path: path.resolve(process.cwd(), '.env') })

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Web3Forms API configuration
    const web3formsAccessKey = 'bb46c38e-f7f4'
    const web3formsEndpoint = 'https://api.web3forms.com/submit'

    console.log('Using Web3Forms API for email delivery')

    // Prepare data for Web3Forms
    const formData = {
      access_key: web3formsAccessKey,
      name: name,
      email: email,
      company: company || '',
      service: service || '',
      message: message,
      from_name: 'S.INNOVATION Contact Form',
      subject: `Nouveau message de ${name}${company ? ` (${company})` : ''}`,
      reply_to: email,
      // Additional metadata
      form_name: 'S.INNOVATION Contact Form',
      website: 'S.INNOVATION Website'
    }

    // Send to Web3Forms API
    const response = await fetch(web3formsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      console.error('Web3Forms API error:', result)
      return NextResponse.json(
        { error: 'Failed to send message via Web3Forms' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully via Web3Forms:', result.message_id)

    /* 
    // OLD SMTP IMPLEMENTATION - COMMENTED FOR LATER USE
    // Email content
    const emailSubject = `Formulaire - ${name}${company ? ` (${company})` : ''}`
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1f2937, #111827); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">S.INNOVATION</h1>
          <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Smart - Solutions - Sustainable</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Nouveau message de contact</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 120px;">Nom:</td>
                <td style="padding: 10px 0; color: #6b7280;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px 0; color: #6b7280;">${email}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Entreprise:</td>
                <td style="padding: 10px 0; color: #6b7280;">${company}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 10px 0; color: #6b7280;">${service}</td>
              </tr>
              ` : ''}
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; color: #374151; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Action requise:</strong> Répondre à ce client dans les 24h pour maintenir un excellent service.
            </p>
          </div>
        </div>
        
        <div style="background: #1f2937; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">© 2024 S.INNOVATION - Solutions Numériques Responsables</p>
          <p style="margin: 5px 0 0 0; opacity: 0.7;">Envoyé depuis le formulaire de contact du site web</p>
        </div>
      </div>
    `

    const emailText = `
Nouveau message de contact - S.INNOVATION

Nom: ${name}
Email: ${email}
${company ? `Entreprise: ${company}` : ''}
${service ? `Service: ${service}` : ''}

Message:
${message}

---
Envoyé depuis le formulaire de contact du site web S.INNOVATION
    `

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'form@sinnov.info',
      to: process.env.CONTACT_RECEIVER || 'contact@sinnov.info',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    })
    */

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email via Web3Forms:', error)
    return NextResponse.json(
      { error: 'Failed to send email via Web3Forms' },
      { status: 500 }
    )
  }
}

/* 
// OLD SMTP IMPLEMENTATION - COMMENTED FOR LATER USE
// This section contains the original SMTP configuration and email sending logic
// To restore SMTP functionality:
// 1. Uncomment the imports at the top
// 2. Uncomment the environment variable loading
// 3. Replace the Web3Forms implementation with the commented SMTP code
// 4. Update the error handling to use SMTP-specific messages
*/
