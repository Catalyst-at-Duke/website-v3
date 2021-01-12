// Used for synchronizing locally

const sync = require("./sync.js");

// true = force update photos, false = don't
sync((forceUpdate = false)).then(() => {
  console.log("Finished updating");
  process.exit();
});
