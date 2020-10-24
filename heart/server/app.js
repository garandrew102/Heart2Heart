require('./db/config');

const express = require('express'),
  // openRoutes = require('./routes/open/'),
  app = express(),
  passport = require('./middleware/index'),
	cookieParser = require('cookie-parser'),
  cors = require("cors");

// Parse incoming JSON into objects
app.use(express.json());
app.use(cors());
// app.use(openRoutes);

app.use(cookieParser());

app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

module.exports = app;