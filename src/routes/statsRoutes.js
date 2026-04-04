const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/statsController');
const { protect } = require('../middleware/authMiddleware');

// Dashboard Stats ko hum hamesha PROTECT rakhenge (Sirf Admin dekh sake)
router.get('/', protect, getDashboardStats);

module.exports = router;
