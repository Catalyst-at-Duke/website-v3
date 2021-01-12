const path = require('path');

const airtable = require('./retrieve');
const firebase = require('./firebase').firebase.get();


let db = firebase.database();
let updateDatabase = () => {
  return new Promise(async (resolve, reject) => {
    let ref = db.ref('/');

    try {
      let members = await airtable.getMembers();
      ref.update({ members }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Updated members on Firebase');
        }
      });

      let exec = await airtable.getExec();
      ref.update({ exec }, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Updated exec on Firebase');
          resolve();
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = updateDatabase;
