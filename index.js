// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Define a port to listen on
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Node.js API!');
});

// Example of a GET route with a parameter
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Example of a POST route
app.post('/echo', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

