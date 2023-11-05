const mongoose = require('mongoose');

// Define the schema for the Brand model
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String, // Assuming the image link will be a string
    required: true,
  },
  published: {
    type: Boolean,
    default: true,
  },
});

// Create the Brand model using the schema
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
