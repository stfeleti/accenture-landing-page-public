// Import the express library for creating the server
const express = require('express');

// Import the connectDb function from the config/db file
const connectDb = require("./config/db");

// Import the brands routes from the routes/index file
const { brands } = require("./routes/index");

// Import swagger-jsdoc and swagger-ui-express for API documentation
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Import cors for handling Cross-Origin Resource Sharing
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Connect to the MongoDB database
connectDb();

// Parse incoming JSON requests
app.use(express.json());

// Use the cors middleware to handle Cross-Origin Resource Sharing
app.use(cors());

// Define Swagger options for API documentation
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Brands REST API',
            description: "A REST API built with Express and MongoDB. This API provides information about trusted brands."
        },
    },
    apis: ["./routes/brandRoutes.js"] 
}

// Set up routes for the '/brands' endpoint
app.use('/brands', brands);

// Set up Swagger documentation route
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
