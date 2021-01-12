// Used for synchronizing locally

const sync = require("./sync.js");

// true = force update photos, false = don't

if (process.argv[2] === "force") {
  console.log("Updating Firestore with photo compression...");
} else {
  console.log("Updating Firestore, ignoring photos");
}

sync((forceUpdate = process.argv[2] === "force")).then(() => {
  console.log("Finished updating");
  process.exit();
});
