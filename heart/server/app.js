require('./db/config');

const express = require('express'),
  // openRoutes = require('./routes/open/'),
  app = express();

// Parse incoming JSON into objects
app.use(express.json());

// app.use(openRoutes);

module.exports = app;