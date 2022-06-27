const express = require('express');
require('dotenv').config();

// Create express server
const app = express();

// Public directory
app.use(express.static('public'));

// Routes
// app.get('/', (request, response) => {
//   response.json({
//     ok: true,
//   });
// });

// Listen to request
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
