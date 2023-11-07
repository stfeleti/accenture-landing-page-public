const express = require('express');
const connectDb = require("./config/db");
const { brands } = require("./routes/index");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors'); 

const app = express();
connectDb();


app.use(express.json());

app.use(cors()); // Use the cors middleware

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Brands REST API',
            description: "A REST API built with Express and MongoDB. This API provides information about trusted brands."
        },
    },
    apis: ["./routes/brandRoutes.js"] 
}

app.use('/brands', brands)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
