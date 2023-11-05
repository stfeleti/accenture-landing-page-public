const swaggerOptions = {
    explorer: true,
    swaggerOptions: {
      urls: [
        {
          url: 'http://localhost:5000/api-docs/swaggerDef.js',
          name: 'Local Development',
        },
        // Add more URLs for different environments if needed
      ],
      docExpansion: 'none',
      filter: true,
      showRequestHeaders: false,
    },
  };
  
  module.exports = swaggerOptions;
  