const express = require("express");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

const server = express();
const PORT = process.env.PORT || 3002;

// Add a health check route
server.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Handle Next.js routes
server.all("*", (req, res) => {
  return handle(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
