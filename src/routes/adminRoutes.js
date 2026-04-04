const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/adminController');

// Routes ko controller functions se map karein
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

module.exports = router;
