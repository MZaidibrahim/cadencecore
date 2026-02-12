const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

const router = express.Router();

// Create transporter once
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

// POST /contact/message
router.post('/message', async (req, res) => {
    try {
        const { firstName, lastName, email, company, message } = req.body;

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        const newMessage = new Message({
            firstName,
            lastName,
            email,
            company,
            message,
        });

        await newMessage.save();   // ✅ Save to MongoDB first

        // ✅ Send email to your domain inbox
        await transporter.sendMail({
            from: `"Cadence Core Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: 'New Website Contact Message',
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr />
                <small>Submitted at: ${new Date().toLocaleString()}</small>
            `,
        });

        res.status(201).json({ message: 'Message sent successfully' });

    } catch (err) {
        console.error('Contact Form Error:', err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
