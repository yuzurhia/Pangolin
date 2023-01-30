import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pangolinModel from "../models/pangolin.js";
import verifyToken from "../middleware/verifyToken.js";
import mongoose from "mongoose";
import pangolin from "../controller/Pangolins.js";

const router = express.Router();

router.get("/pangolin/:id", pangolin.getPangolin);

// route for registering a new account
router.post("/register", pangolin.createPangolin);

// route for logging in an existing account
router.post("/login", pangolin.loginPangolin);

// route for logging out an existing account
router.post("/logout", async (req, res) => {
  // clear the token from the pangolin's session
  res.json({ msg: "Logged out successfully" });

  // TODO: nettoyer le token
});

// route for adding a new friend
router.post("/addPangolin", pangolin.addPangolinFriend);

// route for remove a friend
router.post("/deletePangolin", pangolin.deletePangolinFriend);

// route to get pangolin's friends
router.get("/pangolinFriends/:id", pangolin.getPangolinFriends);

router.get("/getAllPangolin", pangolin.getAllPangolin);

// route to update the role of the pangolin
router.post("/updateRole", pangolin.updateRole);

// router.use(verifyToken);
export default router;
