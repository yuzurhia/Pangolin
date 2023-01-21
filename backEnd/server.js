const express = require("express");
const app = express();
const authentification = require("./routes/authentification");

app.use("/auth", authentification);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
