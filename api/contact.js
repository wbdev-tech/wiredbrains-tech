import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message, recaptchaToken } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Optional reCAPTCHA verification
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      console.log('Verifying reCAPTCHA...');

      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
      });

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        console.log('reCAPTCHA verification failed:', recaptchaData);
        return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
      }

      console.log('reCAPTCHA verification successful');
    } else if (process.env.RECAPTCHA_SECRET_KEY && !recaptchaToken) {
      return res.status(400).json({ error: 'reCAPTCHA verification required' });
    }

    console.log('Form submission received:', { name, email, company, phone });

    // Send email via SMTP (Mailgun)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || '"Wired Brains" <noreply@wiredbrains.io>',
        to: process.env.RECIPIENT_EMAIL || 'contact@wiredbrains.io',
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
${company ? `Company: ${company}` : ''}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This message was sent from the Wired Brains contact form.
        `.trim(),
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>This message was sent from the Wired Brains contact form.</small></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via SMTP');
    } else {
      console.log('Email would be sent in production with proper environment variables');
      console.log('Missing SMTP config:', {
        host: !!process.env.SMTP_HOST,
        user: !!process.env.SMTP_USER,
        pass: !!process.env.SMTP_PASS
      });
    }

    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ error: 'Failed to process form submission' });
  }
}
