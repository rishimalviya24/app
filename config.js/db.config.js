const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/twitter'; // For local MongoDB
// const MONGO_URI = 'your-atlas-connection-string'; // For MongoDB Atlas

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, // Optional, for backward compatibility
      useCreateIndex: true     // Optional, for backward compatibility
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application in case of failure
  }
};

module.exports = connectDB;

// Call this function in your main application file (e.g., app.js or server.js)
