import app from "firebase/app";
import "firebase/database";
import * as config from "./config.json";

const devConfig = {
  apiKey: config.apiKey,
  databaseURL: config.databaseURL,
};

class Firebase {
  constructor() {
    app.initializeApp(devConfig);
    this.db = app.database();
  }
}

export default Firebase;
