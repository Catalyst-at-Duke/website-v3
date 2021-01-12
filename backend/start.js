// Used for synchronizing locally

const sync = require("./sync.js");

sync().then(() => {
  console.log("Finished updating");
  process.exit();
});
