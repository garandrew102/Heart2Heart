const router = require("express").Router(),
  cloudinary = require("cloudinary").v2,
  User = require("../../db/models/user");

// Get current user

router.get("/api/user/me", async (req, res) => res.json(req.user));

// Update a user
router.patch("/api/users/me", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "avatar", "story"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "invalid updates!" });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// Logout a user
router.post("/api/users/logout", async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie("jwt");
    res.json({ message: "Logged out" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Delete a user
router.delete("/api/users/me", async (req, res) => {
  try {
    await req.user.remove();
    res.clearCookie("jwt");
    res.json({ message: "user deleted" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Upload avatar
router.post("/api/users/avatar", async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

// Update password

router.put("/api/password", async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie("jwt");
    res.json({ message: "password updated successfully" });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

// Make request to connect
router.patch("/api/connect/request/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id === String(req.user._id))
      throw Error("You cannot make a connection with yourself!");

    const reciever = await User.findById({ _id: id });

    const indexCon = reciever.connection.findIndex((obj) => {
      return String(obj.connectionId) === String(req.user._id);
    });
    console.log(indexCon >= 0);
    if (indexCon >= 0) {
      throw Error("Already connected with this user.");
    }

    if (!reciever) {
      throw Error("User does not exist!");
    }
    const index = reciever.pendingRequests.findIndex((obj) => {
      return String(obj.connectionId) === String(req.user._id);
    });

    if (index >= 0)
      throw Error("Already in have a pending request with this user.");

    reciever.pendingRequests.push({
      connectionId: req.user._id,
      name: req.user.name,
    });
    await reciever.save();
    res.status(201).json(reciever);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

// confirm request to connect by senderid

router.patch("/api/connect/confirm/:id/:confirm", async (req, res) => {
  try {
    const { id, confirm } = req.params;

    if (id === String(req.user._id))
      throw Error("You cannot make a connection with yourself!");

    //if decline, remove request from reciever
    const sender = await User.findById({ _id: id });

    const reciever = await User.findById({ _id: req.user._id });
    if (!sender && !reciever) throw Error("User no longer exists.");

    if (confirm.toLowerCase() === "false") {
      const array = reciever.pendingRequests.filter((obj) => {
        return String(obj.connectionId) !== String(sender._id);
      });

      reciever.pendingRequests = array;
      reciever.markModified("pendingRequests");
      await reciever.save();
      res.json(reciever);
    } else {
      const array = reciever.pendingRequests.filter((obj) => {
        return String(obj.connectionId) !== String(sender._id);
      });
      reciever.pendingRequests = array;
      reciever.connection.push({ connectionId: sender._id, name: sender.name });
      await reciever.save();

      sender.connection.push({
        connectionId: reciever._id,
        name: reciever.name,
      });
      await sender.save();

      res.json(reciever);
    }
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
