import jwt from "jsonwebtoken";

// middleware function to check for a valid JWT on protected routes
const verifyToken = (req, res, next) => {
  console.log(
    "---------------------------------------------------------------------" +
      process.env.JWT_SECRET
  );
  console.log("req.header" + req.headers["authorization"]);
  // check for token in the authorization header of the request
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  // verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};

// module.exports = verifyToken;
export default verifyToken;
