require('dotenv').config()
const express = require('express');
const compression = require("compression");
const path = require('path');
const isDev = process.env.NODE_ENV === 'dev'

const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

// for all dates
process.env.TZ = 'America/New_York';

// global is dev
process.env.isDev = isDev

app.use(compression());
app.use(express.static(path.resolve('./dist')));

// Use API Routes
app.use('/api', require('./api'));

app.use('/', (req, res, next) => {
  res.sendFile( path.join(__dirname, '../', 'dist/index.html') );
})

async function start() {
  // Listen the server
  app.listen(port, host);
  console.log("Server listening on http://" + host + ":" + port); // eslint-disable-line no-console
}
start();
