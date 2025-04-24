const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/restaurante") 
    console.log("MongoDB connected")
    }  
    catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

module.exports = connectDB; // Export the connectDB function for use in other files