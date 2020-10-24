const { find } = require("../../db/models/user");

const router = require("express").Router(),
  { sendWelcomeEmail, forgotPasswordEmail } = require("../../email/index"),
  User = require("../../db/models/user"),
  jwt = require("jsonwebtoken");

// Create a user
router.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    sendWelcomeEmail(user.email, user.name);
    res.json(user);
  } catch (e) {
    res.status(201).status(400).json({ error: e.toString() });
  }
});

// Login a user
router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// Reset Password- This sends you the reset password email
router.get("/api/password", async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("No account associated with Email");
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: "reset password link sent to email" });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//Redirect to password reset page
router.get("/api/password/:token", (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 6000000,
      sameSite: "Strict",
    });
    res.redirect(process.env.URL + "/updatepassword");
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

//Search route

router.get("/api/search/:type/:search", async (req, res) => {
  const { type, search } = req.params;
  console.log(typeof type, typeof search);
  if (type !== "donor" && type !== "recipient")
    throw new Error("Invalid value for type.");

  const results = await User.find({
    $and: [
      {
        $or: [
          { username: { $regex: search, $options: "i" } },
          { name: { $regex: search, $options: "i" } },
          { story: { $regex: search, $options: "i" } },
        ],
      },
      { role: type },
    ],
  });
  console.log(results);
  res.json(results);
  try {
  } catch (error) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
