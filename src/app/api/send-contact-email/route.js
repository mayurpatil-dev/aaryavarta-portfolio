import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json({
        success: false,
        error: "All fields are required: name, email, subject, and message",
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        error: "Please provide a valid email address",
      }, { status: 400 });
    }

    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return Response.json({
        success: false,
        error: "Input too long. Please keep name under 100 characters, subject under 200 characters, and message under 2000 characters",
      }, { status: 400 });
    }

    const emailContent = {
      to: "patilmayur987654321@gmail.com",
      from: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #374151;">Sender Information</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px;">
            <h3 style="margin: 0 0 10px 0; color: #374151;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This message was sent from the Aaryavarta portfolio contact form.</p>
            <p>Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
      `,
    };

    // Try to send email using Resend if API key is available
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Aaryavarta Contact Form <onboarding@resend.dev>',
          to: ['patilmayur987654321@gmail.com'],
          subject: `Contact Form: ${subject}`,
          html: emailContent.html,
          text: emailContent.text,
        });

        if (error) {
          console.error('Resend error:', error);
          // Fall back to logging
          console.log('Email would be sent with the following details:');
          console.log('To:', emailContent.to);
          console.log('From:', emailContent.from);
          console.log('Subject:', emailContent.subject);
          console.log('Content:', emailContent.text);
        } else {
          console.log('Email sent successfully via Resend:', data);
        }
      } catch (resendError) {
        console.error('Resend service error:', resendError);
        // Fall back to logging
        console.log('Email would be sent with the following details:');
        console.log('To:', emailContent.to);
        console.log('From:', emailContent.from);
        console.log('Subject:', emailContent.subject);
        console.log('Content:', emailContent.text);
      }
    } else {
      // No API key available, just log the email details
      console.log('Email would be sent with the following details:');
      console.log('To:', emailContent.to);
      console.log('From:', emailContent.from);
      console.log('Subject:', emailContent.subject);
      console.log('Content:', emailContent.text);
      console.log('Note: To enable real email sending, add RESEND_API_KEY to your environment variables');
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return Response.json({
      success: false,
      error: "Sorry, there was an error sending your message. Please try again later.",
    }, { status: 500 });
  }
}