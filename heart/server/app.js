require("./db/config");

const express = require("express"),
  openRoutes = require("./routes/open/"),
  app = express(),
  userRouter = require("./routes/secure/users"),
  passport = require("./middleware/index"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  fileUpload = require("express-fileupload");

// Parse incoming JSON into objects
app.use(express.json());
app.use(openRoutes);

// Unauthenticated routes

// app.use(openRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(cookieParser());

app.use(
  passport.authenticate("jwt", {
    session: false,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/images",
  })
);

//  Authenticated  Routes
app.use(userRouter);

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
