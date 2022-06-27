const express = require('express');

// Create express server
const app = express();

// Routes
app.get('/', (request, response) => {
  response.json({
    ok: true,
  });
});

// Listen to request
app.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
