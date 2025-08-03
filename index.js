require('dotenv').config();
const express = require('express');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
app.use(express.json());
app.use('/', loginRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔐 Login microservice corriendo en http://localhost:${PORT}`);
});
