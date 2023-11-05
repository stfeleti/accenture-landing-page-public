const swaggerDef = {
    openapi: '3.0.0',
    info: {
      title: 'Accenture Landing Page API',
      version: '1.0.0',
      description: 'API for the Accenture Landing Page',
      contact: {
        name: 'Promise',
        email: 'stfeleti@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Local Development Server',
      },
      // Add more servers as needed for different environments
    ],
    paths: {
      '/brands': {
        get: {
          summary: 'Get all brands',
          responses: {
            '200': {
              description: 'Successful response',
            },
            '500': {
              description: 'Internal server error',
            },
          },
        },
      },
      // Add more paths and operations as needed
    },
  };
  
  module.exports = swaggerDef;
  