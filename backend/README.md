# Syncing Airtable to Firebase

### Running:

1. Run `yarn` to install all dependencies
2. Create a `config.json` in this folder that looks like this:

```json
{
  "firebase_credentials": "firebase_credentials.json",
  "airtable_api_key": "<Airtable API key>",
  "catalystdb_base_key": "<catalyst_db base key from Airtable>",
  "database_url": "<Firebase Database URL>"
}
```

3. Download the service key for the firebase project, name it `firebase_credentials.json`.
4. Run `yarn start`.

Note: these are the same credentials that belong in `client/src/components/firebase`.

### Deploying to Google Cloud Functions

1. Visit the [Cloud Functions](https://console.cloud.google.com/functions/add) page, and fill in the information. Set the trigger type to whichever trigger you prefer (HTTP for Cloud Scheduler).
2. Zip all the contents of this folder (without installing any dependencies, e.g. `node_modules` should **not** be in the archive).
3. Set the runtime to Node.js 10, set the **source code** dropdown to **ZIP Upload**. Upload the zip file you just created, and choose a storage bucket.
4. **IMPORTANT**: set the entry point to "sync" instead of "helloWorld"
5. Click **deploy** to deploy the project.
6. To set up automatic scheduling, use **Google Cloud Scheduler** with the HTTP link on the returned page.
