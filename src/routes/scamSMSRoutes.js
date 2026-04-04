const express = require('express');
const router = express.Router();
const { addScamSMS, getScamSMS } = require('../controllers/scamSMSController');

// "/api/scam-sms" ke liye routes
router.post('/', addScamSMS);
router.get('/', getScamSMS);

module.exports = router;
