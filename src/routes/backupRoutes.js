const express = require('express');
const router = express.Router();
const { downloadBackup } = require('../controllers/backupController');

router.get('/', downloadBackup);

module.exports = router;
