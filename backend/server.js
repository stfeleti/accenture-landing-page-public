const express = require('express');
const connectDb = require("./config/db");
const { brands } = require("./routes/index");

const app = express();
connectDb();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/brands', brands);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
