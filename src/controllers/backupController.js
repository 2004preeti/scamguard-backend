const ScamCall = require('../models/ScamCall');
const ScamSMS = require('../models/ScamSMS');

exports.downloadBackup = async (req, res) => {
  try {
    const calls = await ScamCall.find();
    const sms = await ScamSMS.find();
    res.json({ success: true, backup: { calls, sms }, date: new Date() });
  } catch (err) {
    res.status(500).json({ message: 'Backup Failed' });
  }
};
