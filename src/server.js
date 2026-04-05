// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES IMPORT (Correct paths)
const adminRoutes = require('./routes/adminRoutes');
const scamCallRoutes = require('./routes/scamCallRoutes');
const scamSMSRoutes = require('./routes/scamSMSRoutes');
const scamLinkRoutes = require('./routes/scamLinkRoutes');
const statsRoutes = require('./routes/statsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const scamWARoutes = require('./routes/scamWARoutes');
const userRoutes = require('./routes/userRoutes');
const backupRoutes = require('./routes/backupRoutes');

// ROUTES USE
app.use('/api/admin', adminRoutes);
app.use('/api/scam-calls', scamCallRoutes);
app.use('/api/scam-sms', scamSMSRoutes);
app.use('/api/scam-links', scamLinkRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/scam-whatsapp', scamWARoutes);
app.use('/api/users', userRoutes);
app.use('/api/backup', backupRoutes);

// HEALTH CHECK ROUTE
app.get('/', (req, res) => {
  res.send('🚀 ScamGuard AI Backend is Running Successfully...');
});

// SERVER LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server is running on port ${PORT}`));
