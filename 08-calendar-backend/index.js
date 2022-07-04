const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Create express server
const app = express();

// Database
dbConnection();

// Cors
app.use(cors());

// Public directory
app.use(express.static('public'));

// Lecture and body response parser
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listen to request
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
