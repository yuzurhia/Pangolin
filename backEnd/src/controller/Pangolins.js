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
    res.status(201).json({ pangolin: nom });
  } catch (error) {
    res.status(200).send({ error });
  }
};

const addPangolinFriend = async (req, res) => {
  const { _id, idFriend } = req.body;
  console.log("ajout amis" + _id, idFriend);
  // Interception d'erreur
  const pangolinExist = await pangolinModel.findOne({
    amis: req.body.idFriend,
  });
  if (pangolinExist) {
    return res.status(400).json({ msg: "pangolin already friend" });
  }
  // const pangolin = await pangolinModel.findOne({ _id: _id });
  // if (pangolin) {
  //   return res.status(400).json({ msg: "pangolin does exists" });
  // }
  try {
    const pangolin = await pangolinModel.updateOne(
      { _id: _id },
      { $push: { amis: idFriend } }
    );
    res.status(201).json({ pangolin: _id });
  } catch (error) {
    res.status(200).send({ error });
  }
};

const getPangolinFriends = async (req, res) => {
  const _id = req.body._id;
  const pangolin = await pangolinModel.findById({ _id });
  if (!pangolin) {
    return res.status(404).json({ msg: "Pangolin's friend not found" });
  }
  res.json(pangolin.amis);
};

const getAllPangolin = async (req, res) => {
  // console.log(pangolins);
  try {
    const pangolins = await pangolinModel.find({});
    // console.log(pangolins);
    let tableau_ID = [];
    for (let i = 0; i < pangolins.length; i++) {
      const element = pangolins[i];
      // console.log(element._id);
      tableau_ID.push(element._id);
    }
    res.status(201).json(tableau_ID);
  } catch (error) {
    res.status(200).send({ error });
  }
};

export default {
  createPangolin,
  loginPangolin,
  getPangolin,
  testPangolin,
  addPangolinFriend,
  getPangolinFriends,
  getAllPangolin,
};
