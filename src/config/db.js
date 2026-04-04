// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ye line add karein check karne ke liye (Sirf debug ke liye, baad mein hata dena)
    console.log('URI Check:', process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
