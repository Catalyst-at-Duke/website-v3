# Client Frontend

Running:

1. Run `yarn` to install all dependencies
2. Create a `config.json` in `src/components/firebase` that looks like this:

```json
{
  "firebase_credentials": "firebase_credentials.json",
  "airtable_api_key": "<Airtable API key>",
  "catalystdb_base_key": "<catalyst_db base key from Airtable>",
  "database_url": "<Firebase Database URL>"
}
```

3. Download the service key for the firebase project, name it `firebase_credentials.json` and place it in `src/components/firebase`.
4. Run `yarn start` or deploy it to the cloud.
