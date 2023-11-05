const express = require('express');
const mongoose = require('mongoose');
const brandRoutes = require('./routes/brandRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDef = require('./swaggerDef');

const app = express();

// TODO: Add any middleware and configurations here


//Todo:  Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use brand routes
app.use('/api', brandRoutes);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDef));

// TODO: Add any additional routes or middleware as needed

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
