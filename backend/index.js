// Used for Google Cloud Functions

const sync = require("./sync.js");

exports.sync = (req, res) => {
  console.log("Starting sync");
  sync((forceUpdate = false)).then(() => {
    console.log("Finished updating");
    res.end();
    process.exit();
  });
  res.status(200).send("Started synchronization.");
};
