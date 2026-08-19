// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================
// Enable cross-origin requests for your frontend domains
app.use(cors({
  origin: [
    'https://chui-refurbished-1.onrender.com',
    'http://localhost:3000'
  ],
  credentials: true
}));

// Parse JSON bodies (for API requests like OTP auth and M-Pesa payments)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically (e.g., /uploads/logo.png or product side/front views)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ==========================================
// DATABASE CONNECTION
// ==========================================
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('FATAL ERROR: MONGODB_URI is not defined in .env file.');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Successfully connected to MongoDB Cluster (Chui Electronics Database)'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ==========================================
// API ROUTES (Placeholders for your features)
// ==========================================

// Health Check Route (Useful for Render deployments)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', message: 'Chui Electronics Backend is running!' });
});

// Auth Routes (Login, OTP verification)
app.use('/api/auth', require('./routes/auth'));

// Product Routes (Admin uploads, fetch catalog)
app.use('/api/products', require('./routes/products'));

// Order Routes (Delivery status tracking, M-Pesa, Cash on Delivery)
app.use('/api/orders', require('./routes/orders'));

// Settings Routes (Admin updating phone number, email, footer, logo)
app.use('/api/settings', require('./routes/settings'));

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 API available at http://localhost:${PORT}`);
});