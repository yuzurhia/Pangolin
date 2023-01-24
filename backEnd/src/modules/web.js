// import http from "http";
// import https from "https";
// import fs from "fs";

// import { app, express } from "../app/express.js";
// // import { startApolloServer } from "../app/apollo";

// function load() {
//   const httpsPromise = new Promise(function (resolve, reject) {
//     if (process.env.APP_PORT != "false") {
//       try {
//         const httpsServer = https.createServer(
//           {
//             key: fs.readFileSync("./ssl/key.pem"),
//             cert: fs.readFileSync("./ssl/cert.pem"),
//           },
//           app()
//         );
//         httpsServer.createServer(process.env.APP_PORT, function () {
//           console.log(
//             "Le serveur est démarré : https://localhost:" + process.env.APP_PORT
//           );
//           resolve({ https: httpsServer });
//         });
//         resolve({ https: httpsServer });
//       } catch (reason) {
//         console.error(reason);
//         reject({ https: false });
//       }
//     } else {
//       resolve({ https: false });
//     }
//   });

//   const httpPromise = new Promise(function (resolve, reject) {
//     if (process.env.APP_PORT != "false") {
//       try {
//         const httpServer = http.createServer(app);
//         httpServer.createServer(
//           process.env.PORT || process.env.APP_PORT,
//           function () {
//             console.log(
//               "Le serveur est démarré : http://localhost:" +
//                 (process.env.PORT || process.env.APP_PORT)
//             );
//             resolve({ http: httpServer });
//           }
//         );
//         resolve({ http: httpServer });
//       } catch (reason) {
//         console.error(reason);
//         reject({ http: false });
//       }
//     } else {
//       resolve({ http: false });
//     }
//   });

//   return new Promise(function (resolve, reject) {
//     Promise.all([httpsPromise, httpPromise])
//       .then((values) => {
//         const servers = values.reduce((result, current) =>
//           Object.assign(result, current)
//         );
//         const { http } = servers;

//         listen(http)
//           .then(() => {
//             resolve({ http: true, https: true, apollo: true });
//           })
//           .catch((reason) => {
//             console.error(reason);
//             resolve({ http: true, https: true, apollo: false });
//           });
//       })
//       .catch((reason) => {
//         console.error(reason);
//         const servers = values.reduce((result, current) =>
//           Object.assign(result, current)
//         );
//         resolve(servers.merge({ apollo: false }));
//       });
//   });
// }

// // ----------------------------------------------------------------------------------------------------------

// import http from "http";
// import { app } from "../app/express.js";
import dotenv from "dotenv";
dotenv.config();

// export function load() {
//   console.log("variable d'environnement:" + process.env.APP_KEY);
//   const httpServer = http.createServer(app);
//   httpServer.listen(process.env.APP_PORT, () => {
//     // console.log(`Web server listening on port ${process.env.PORT}`);
//     console.log(
//       "Le serveur est démarré : https://localhost:" + process.env.APP_PORT
//     );
//   });
// }

// ----------------------------------------------------------------------------------------------------------

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
