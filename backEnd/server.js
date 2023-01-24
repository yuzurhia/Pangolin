// const express = require("express");
// const app = express();
// const authentification = require("./routes/authentification");

// app.use("/auth", authentification);

// app.get("/", (req, res) => {
//   res.send("hi");
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
import path from "path";
import fs from "fs";

//--------------------------------------------------------------------
//                  Load modules
//--------------------------------------------------------------------
let modulesPromises = [];
const files = fs.readdirSync(path.resolve("src", "modules"), {
  withFileTypes: true,
});
for (const index in files) {
  const file = files[index];
  if (file.isFile()) {
    const { default: module } = await import("./src/modules/" + file.name);

    if (module.name === "load") {
      console.log("Loading module " + file.name);
      const load = module();
      modulesPromises.push(load);
    }
  }
}
Promise.all(modulesPromises)
  .then(function (values) {
    console.log("Load ended :", values);
  })
  .catch(function (reason) {
    console.error("Error !", reason);
    process.exit();
  });
