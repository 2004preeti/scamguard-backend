const ScamCall = require('../models/ScamCall');
const ScamSMS = require('../models/ScamSMS');
const ScamLink = require('../models/ScamLink');
const User = require('../models/User');

// @desc    Get All Dashboard Analytics
// @route   GET /api/stats
exports.getDashboardStats = async (req, res) => {
  try {
    // Promise.all se saare counts ek saath parallel mein nikalenge (Fast execution)
    const [totalCalls, totalSMS, totalLinks, totalUsers] = await Promise.all([
      ScamCall.countDocuments(),
      ScamSMS.countDocuments(),
      ScamLink.countDocuments(),
      User.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalReports: totalCalls + totalSMS + totalLinks,
        calls: totalCalls,
        sms: totalSMS,
        links: totalLinks,
        users: totalUsers,
        systemStatus: 'Healthy',
        lastUpdated: new Date().toLocaleString(),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
