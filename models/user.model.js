const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes extra whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Converts to lowercase
   
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = userModel;

