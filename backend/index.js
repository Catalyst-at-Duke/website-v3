// Used for Google Cloud Functions

const sync = require("./sync.js");

exports.sync = (req, res) => {
  const updatePhotos = req.query.updatePhotos === "true";
  console.log(
    `Starting sync ${updatePhotos ? "updating photos" : "skipping photos"}.`
  );
  if (updatePhotos) {
    res.status(200).send("Synchronizing with photos");
  } else {
    res.status(200).send("Synchronizing skipping photos");
  }
  sync(updatePhotos === "true").then(() => {
    console.log("Finished updatin Firebase.");
    process.exit();
  });
};
