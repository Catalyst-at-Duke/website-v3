// Used for synchronizing locally

const sync = require("./sync.js");

// true = force update photos, false = don't

sync((forceUpdate = process.argv[2] == "force")).then(() => {
  console.log("Finished updating");
  process.exit();
});
