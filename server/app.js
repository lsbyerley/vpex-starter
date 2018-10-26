const express = require('express');
const compression = require("compression");

const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.use(compression());

// Use API Routes
app.use('/api', require('./api'));

async function start() {
  // Listen the server
  app.listen(port, host);
  console.log("Server listening on http://" + host + ":" + port); // eslint-disable-line no-console
}
start();
