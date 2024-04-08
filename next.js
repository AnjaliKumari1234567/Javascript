

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'anjali@gmail.com',
      pass: '12##'
    }
  });

  // Define email content
  const mailOptions = {
    from: 'anjali@gmail.com',
    to: 'pragya@gmail.com',
    subject: 'New Notification',
    text: 'This is a notification from your Next.js app!'
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
}

