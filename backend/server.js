const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
  override: true
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        // process.exit(1); // Optional: Exit if DB fails
    });

// Routes
app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Cadence Core Backend Running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
