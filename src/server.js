const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Naya Route Import Karein
const adminRoutes = require('./routes/adminRoutes');
const scamCallRoutes = require('./routes/scamCallRoutes'); // <--- Yeh Line Add Karein
const scamSMSRoutes = require('./routes/scamSMSRoutes');
const scamLinkRoutes = require('./routes/scamLinkRoutes');
const statsRoutes = require('./routes/statsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const scamWARoutes = require('./routes/scamWARoutes');
const userRoutes = require('./routes/userRoutes');
const backupRoutes = require('./routes/backupRoutes');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// 2. Routes ko Connect Karein
app.use('/api/admin', adminRoutes);
app.use('/api/scam-calls', scamCallRoutes); // <--- Yeh Line Add Karein
app.use('/api/scam-sms', scamSMSRoutes);
app.use('/api/scam-links', scamLinkRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/scam-whatsapp', scamWARoutes);
app.use('/api/users', userRoutes);
app.use('/api/backup', backupRoutes);
// Health Check
app.get('/', (req, res) => {
  res.send('ScamGuard AI Backend API is Running... 🛡️');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
