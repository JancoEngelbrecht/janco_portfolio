const express = require('express');
const sgMail = require('@sendgrid/mail');
require('dotenv/config'); 

const router = express.Router();

// Send email to owner using SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const emailContent = `
    <h2>New Customer Enquiry</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const msg = {
    to: 'engelbrechtjanco@gmail.com', 
    from: 'engelbrechtjanco@gmail.com', 
    subject: 'New Customer Enquiry',
    text: 'New Customer Enquiry:',
    html: emailContent,
  };
  
  try {
    const response = await sgMail.send(msg);
    console.log(response[0].statusCode);
    console.log(response[0].headers);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;