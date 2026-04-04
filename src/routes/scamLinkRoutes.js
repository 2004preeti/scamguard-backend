const express = require('express');
const router = express.Router();
const {
  addScamLink,
  getScamLinks,
} = require('../controllers/scamLinkController');

// Iska main URL server.js mein "/api/scam-links" rakhenge
router.post('/', addScamLink);
router.get('/', getScamLinks);

module.exports = router;
