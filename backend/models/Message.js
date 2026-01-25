const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    company: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'new', // new, read, replied
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Message', MessageSchema);
