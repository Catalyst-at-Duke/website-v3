const firebase = require('firebase-admin');
const path = require('path');

const config = require('./config.json');
const serviceAccount = require(path.resolve(
    __dirname,
    config.firebase_credentials
));


class Firebase {
    constructor() {
        this.firebase = firebase;
        if (!this.firebase.apps.length) {
            this.firebase.initializeApp({
                credential: firebase.credential.cert(serviceAccount),
                databaseURL: config.database_url,
                storageBucket: config.storage_bucket,
            });
        }
    }

    get() {
        return this.firebase;
    }
}

module.exports = {
    firebase: new Firebase()
};