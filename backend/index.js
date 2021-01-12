// Used for Google Cloud Functions

const sync = require("./sync.js");

exports.sync = (req, res) => {
  res.write("Starting sync");
  sync().then(() => {
    console.log("Finished updating");
    res.write("Finished sync");
    res.end();
    process.exit();
  });
};
