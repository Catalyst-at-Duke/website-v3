const firebase = require("firebase-admin");
const path = require("path");
const config = require("./config.json");
const serviceAccount = require(path.resolve(
  __dirname,
  config.firebase_credentials
));
const getAirtable = require("./retrieveAirtable").getAirtable;

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: config.database_url,
});

let db = firebase.database();

let ref = db.ref("members/");

// ref.on('value', (snapshot) => {
// 	console.log(snapshot.val());
// })

ref.set({});

getAirtable()
  .then((members) => {
    for (let i = 0; i < members.length; i++) {
      ref.push(members[i]);
    }
    console.log("Successfully updated Firebase!");
  })
  .catch(console.error);
