import mongodb from "../app/mongodb.js";

function load() {
  return new Promise(function (resolve, reject) {
    mongodb
      .then(function () {
        resolve({ mongodb: true });
      })
      .catch(function (reason) {
        console.error(reason);
        reject({ mongodb: false });
      });
  });
}

export default load;
