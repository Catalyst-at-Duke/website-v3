const firebase = require("firebase-admin");
const path = require("path");
const config = require("./config.json");
const serviceAccount = require(path.resolve(
  __dirname,
  config.firebase_credentials
));
const airtable = require("./retrieveAirtable");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: config.database_url,
});

let updateDatabase = async () => {
  let db = firebase.database();

  let ref = db.ref("/");

  // ref.once("value", (snapshot) => {
  //   console.log(snapshot.val());
  // });

  try {
    let members = await airtable.getMembers();
    ref.update({ members }, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log("Successfully updated members on Firebase");
      }
    });

    let exec = await airtable.getExec();
    ref.update({ exec }, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log("Successfully updated exec on Firebase");
        process.exit();
      }
    });
  } catch (e) {
    console.error(e);
  }
};

updateDatabase();
