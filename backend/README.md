# Syncing Airtable to Firebase

Running:

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
