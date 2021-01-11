const sync = require("./sync.js");
// const process = require('process');

sync().then(() => {
  console.log("Finished updating");
  // res.status(200).send("Updated Firebase");
  process.exit();
});
