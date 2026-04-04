const ScamSMS = require('../models/ScamSMS');

// 1. Add Naya SMS Report
exports.addScamSMS = async (req, res) => {
  try {
    const newSMS = await ScamSMS.create(req.body);
    res.status(201).json({ success: true, data: newSMS });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 2. Get Saare SMS Reports
exports.getScamSMS = async (req, res) => {
  try {
    const smsList = await ScamSMS.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: smsList });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
