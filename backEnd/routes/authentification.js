const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pangolinModel = require("../models/pangolin");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.use(verifyToken);

router.get("/pangolin", (req, res) => {
  res.json({ msg: "welcome pangolin", nom: req.nom });
});

// route for registering a new account
router.post("/register", async (req, res) => {
  // check if pangolin already exists
  const pangolinExist = await pangolinModel.findOne({ nom: req.body.nom });
  if (pangolinExist)
    return res.status(400).json({ msg: "pangolin already exists" });

  // create new pangolin
  const newpangolin = new pangolin({
    _id: new mongoose.Types.ObjectId(),
    nom: req.body.nom,
    password: req.body.password,
    role: req.body.role,
  });

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newpangolin.password, salt);
  newpangolin.password = hash;
  await newpangolin.save();

  // create and sign a JWT
  const token = await jwt.sign(
    { id: newpangolin._id },
    process.env.JWT_SECRET,
    { expiresIn: 3600 }
  );
  res.json({ token });
});

// route for logging in an existing account
router.post("/login", async (req, res) => {
  // check if pangolin exists
  const pangolin = await pangolinModel.findOne({ id: req.body.id });
  if (!pangolin)
    return res.status(400).json({ msg: "pangolin does not exists" });

  // check password
  const isMatch = await bcrypt.compare(req.body.password, pangolin.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  // create and sign a JWT
  const token = await jwt.sign({ id: pangolin._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  res.json({ token });
});

// route for logging out an existing account
router.post("/logout", async (req, res) => {
  // clear the token from the pangolin's session
  req.session.token = null;
  res.json({ msg: "Logged out successfully" });
});

module.exports = router;
