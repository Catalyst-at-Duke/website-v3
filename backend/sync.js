const firebase = require("firebase-admin");
const path = require("path");
const config = require("./config.json");
const serviceAccount = require(path.resolve(
  __dirname,
  config.firebase_credentials
));
const airtable = require("./retrieve");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: config.database_url,
});

let db = firebase.database();
let updateDatabase = () => {
  return new Promise(async (resolve, reject) => {
    let ref = db.ref("/");

    // ref.once("value", (snapshot) => {
    //   console.log(snapshot.val());
    // });

    try {
      let members = await airtable.getMembers();
      ref.update({ members }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Updated members on Firebase");
        }
      });

      let exec = await airtable.getExec();
      ref.update({ exec }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Updated exec on Firebase");
          resolve();
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = updateDatabase;
