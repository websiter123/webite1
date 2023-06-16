const express = require('express');
const app = express();

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/log', (req, res) => {
  const ip = req.ip; // Get the IP address from the request object
  console.log('IP logged:', ip);

  // You can perform additional operations with the IP address here
  // such as storing it in a database or writing it to a log file

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
