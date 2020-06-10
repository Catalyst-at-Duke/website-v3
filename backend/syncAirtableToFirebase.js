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

let db = firebase.database();

let ref = db.ref("/");

// ref.on('value', (snapshot) => {
// 	console.log(snapshot.val());
// })

airtable
  .getMembers()
  .then((members) => {
    ref.update({ members });
    console.log("Successfully updated Members!");
  })
  .catch(console.error);

airtable.getExec().then((exec) => {
  ref.update({ exec });
  console.log("Successfully updated Exec!");
});
