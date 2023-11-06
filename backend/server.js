const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

const PORT = process.env.PORT || 3001;
const dbUrl = config.database.url;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const brandRoutes = require('./routes/brandRoutes');

app.use(express.json());

app.use('/api/brands', brandRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
