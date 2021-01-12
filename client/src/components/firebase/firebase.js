import app from "firebase/app";
import "firebase/firestore";
import * as config from "./config.json";

const devConfig = {
  apiKey: config.firebase_credentials,
  databaseURL: config.database_url,
  projectId: "elated-coil-285118",
};

class Firebase {
  constructor() {
    app.initializeApp(devConfig);
    this.db = app.firestore();
  }
}

export default Firebase;
