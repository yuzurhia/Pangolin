import pangolinModel from "../models/pangolin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createPangolin = async (req, res) => {
  // Vérifier si le pangolin existe déjà
  const pangolinExist = await pangolinModel.findOne({ nom: req.body.nom });
  if (pangolinExist) {
    return res.status(400).json({ msg: "pangolin already exists" });
  }

  // Créer un nouveau pangolin
  const newPangolin = new pangolinModel({
    nom: req.body.nom,
    password: req.body.password,
    role: req.body.role,
  });
  // Hasher le mot de passe
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPangolin.password, salt);
  newPangolin.password = hash;

  // Enregistrer le pangolin
  await newPangolin.save();
  res.json({ msg: "Pangolin created successfully" });
};

const loginPangolin = async (req, res) => {
  // Vérifier si le pangolin existe
  const pangolin = await pangolinModel.findOne({ nom: req.body.nom });
  if (!pangolin) {
    return res.status(400).json({ msg: "pangolin does not exists" });
  }

  // Vérifier le mot de passe
  const isMatch = await bcrypt.compare(req.body.password, pangolin.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  // Créer et signer un JWT
  const token = jwt.sign({ id: pangolin._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  res.json({ token });
};

const getPangolin = async (req, res) => {
  const pangolin = await pangolinModel.findById(req.params.id);
  console.log("qeaqdfsdf" + pangolin);
  if (!pangolin) {
    return res.status(404).json({ msg: "Pangolin not found" });
  }
  res.json(pangolin);
};

const testPangolin = async (req, res) => {
  const { nom, password, role } = req.body;
  console.log("testPangolin");
  try {
    const pangolin = await pangolinModel.create({
      nom,
      password,
      role,
    });
    res.status(201).json({ pangolin: user._id });
  } catch (error) {
    res.status(200).send({ err });
  }
};

export default { createPangolin, loginPangolin, getPangolin, testPangolin };
