const mongoose = require('mongoose');
const User = require('../src/models/User');
const sampleUsers = require('../src/constant/sampleUsers');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hoohacks_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Clear existing users and insert sample data
async function seedDatabase() {
  try {
    // Delete existing users
    await User.deleteMany({});
    console.log('Cleared existing users');
    
    // Insert sample users
    const result = await User.insertMany(sampleUsers);
    console.log(`Successfully inserted ${result.length} users`);
    
    // Log a few samples
    console.log('Sample users:');
    for (let i = 0; i < Math.min(3, result.length); i++) {
      console.log(`- ${result[i].username} (${result[i].bloodGroup}), Location: [${result[i].location.coordinates}]`);
    }
    
    mongoose.disconnect();
    console.log('Database seeding completed');
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.disconnect();
    process.exit(1);
  }
}

seedDatabase(); 