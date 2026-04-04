const ScamLink = require('../models/ScamLink');

// 1. Add Naya Scam Link Report
exports.addScamLink = async (req, res) => {
  try {
    const newLink = await ScamLink.create(req.body);
    res.status(201).json({ success: true, data: newLink });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 2. Get Saare Scam Link Reports
exports.getScamLinks = async (req, res) => {
  try {
    const linksList = await ScamLink.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: linksList });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
