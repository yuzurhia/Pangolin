import dotenv from "dotenv";
dotenv.config();

import http from "http";
import { app, express } from "../app/express.js";

function load() {
  const httpPromise = new Promise(function (resolve, reject) {
    if (process.env.APP_PORT != "false") {
      try {
        const httpServer = http.createServer(app);
        httpServer.listen(process.env.PORT || process.env.APP_PORT, () => {
          console.log(
            "Le serveur est démarré : http://localhost:" +
              (process.env.PORT || process.env.APP_PORT)
          );
          resolve({ http: true });
        });
      } catch (reason) {
        console.error(reason);
        reject({ http: false });
      }
    } else {
      resolve({ http: false });
    }
  });

  return httpPromise;
}

export default load;
