const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// POST /contact/message
router.post('/message', async (req, res) => {
    try {
        const { firstName, lastName, email, company, message } = req.body;

        // Simple validation
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

        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('Contact Form Error:', err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
