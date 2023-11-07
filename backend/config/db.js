// Import the mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Load environment variables from a .env file
require("dotenv").config();

/**
 * Function to connect to the MongoDB database.
 * @returns {Promise<void>} - A promise that resolves once the connection is established.
 * @throws {Error} - If the connection fails, an error is thrown.
 */
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database using the provided URI
        const conn = await mongoose.connect(process.env.MONGO_URI, {});

        // Log a success message if the connection is successful
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        // Log an error message and exit the process if the connection fails
        console.error(err);
        process.exit(1);
    }
};

// Export the connectDB function to make it available for use in other files
module.exports = connectDB;
