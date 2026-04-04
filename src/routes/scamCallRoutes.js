const express = require('express');
const router = express.Router();
const {
  addScamNumber,
  getScamNumbers,
  updateCallStatus, // <-- Import karein
} = require('../controllers/scamCallController');

// Routes
router.get('/', getScamNumbers);
router.post('/', addScamNumber);
router.post('/update', updateCallStatus); // <-- UPDATE ROUTE (POST ya PATCH use kar sakte hain)

module.exports = router;
