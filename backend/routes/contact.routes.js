const express = require('express');
const { Resend } = require('resend');
const Message = require('../models/Message');

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /contact/message
router.post('/message', async (req, res) => {
    try {
        const { firstName, lastName, email, company, message } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Save to MongoDB first
        const newMessage = new Message({
            firstName,
            lastName,
            email,
            company,
            message,
        });

        await newMessage.save();

        // Send email via Resend
        await resend.emails.send({
            from: 'VextaCore <support@vextacore.com>',
            to: 'support@vextacore.com',
            subject: 'New Website Contact Message',
            html: `
                <h2>New Contact Form Submission</h2>
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
