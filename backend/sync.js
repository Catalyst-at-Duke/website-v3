const airtable = require("./retrieve");
const firebase = require("./firebase").firebase.get();

let db = firebase.firestore();
let updateDatabase = (forceUpdatePhotos) => {
  return new Promise(async (resolve, reject) => {
    let ref = db.collection("people");

    try {
      let members = await airtable.getMembers(forceUpdatePhotos);
      ref.doc("members").set({ ...members }, { merge: true }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Updated members on Firebase");
        }
      });

      let exec = await airtable.getExec();
      ref.doc("exec").set({ ...exec }, { merge: true }, (err) => {
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
