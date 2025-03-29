require("dotenv").config();

const mongoose = require("mongoose");

const connectToDatabase = async () => {
let uri = process.env.MONGO_URI;    
    console.log(uri);
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Unable to connect to MongoDB:", err.message);
    throw err;
  }
};

const closeDatabaseConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed successfully");
  } catch (err) {
    console.error("Error closing MongoDB connection:", err.message);
  }
};

module.exports = { connectToDatabase, closeDatabaseConnection };
