const express = require('express');
const next = require('next');
require('dotenv').config(); // Load environment variables

const port = process.env.PORT || 3002; // Use PORT from env or default to 3002
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.all('*', (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
