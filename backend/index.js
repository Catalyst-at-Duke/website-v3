const sync = require("./sync.js");

exports.sync = (req, res) => {
  sync().then(() => {
    console.log("Finished updating");
    res.status(200).send("Updated Firebase");
    process.exit();
  });
};
