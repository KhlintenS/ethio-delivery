const { createServer } = require('http');
const next = require('next');

const PORT = process.env.PORT || 8080; // Use the correct port
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
