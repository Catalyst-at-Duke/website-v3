import app from "firebase/app";
const config = require("./config.json");

const devConfig = {
  apiKey: config.firebase_credentials,
  databaseURL: config.database_url,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
