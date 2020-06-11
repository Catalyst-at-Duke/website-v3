import app from "firebase/app";
import "firebase/database";
const config = require("./config.json");

const devConfig = {
  apiKey: config.firebase_credentials,
  databaseURL: config.database_url,
};

class Firebase {
  constructor() {
    app.initializeApp(devConfig);
    this.db = app.database();
  }
}

export default Firebase;
