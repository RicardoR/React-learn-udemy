const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Create express server
const app = express();

// Database
dbConnection();

// Public directory
app.use(express.static('public'));

// Lecture and body response parser
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// todo: events crud

// Listen to request
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
