const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
  } catch (error) {
    console.log("===== FULL ERROR =====");
    console.log(error.name);
    console.log(error.message);
    console.log(error);

    throw error;
  }
};

module.exports = connectDB;