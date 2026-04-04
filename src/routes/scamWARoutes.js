const express = require('express');
const router = express.Router();
const { getWAData, addWAData } = require('../controllers/scamWAController');

router.get('/', getWAData);
router.post('/', addWAData);

module.exports = router;
