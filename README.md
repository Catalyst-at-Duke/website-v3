# Catalyst website-v3

## Running

This assumes that you have node already installed. If not, download [here](https://nodejs.org/en/download/).

Make sure to run `npm i` inside the main dir **AND** client dir to install the appropriate npm packages.

## Configuring Credentials

In the `resources/` folder, ensure the following directory pattern is followed:

```
resources
├── config.json
└── firebase_credentials.json
```

`config.json` should follow this format:

```json
{
  "firebase_credentials": "firebase_credentials.json",
  "airtable_api_key": "",
  "catalystdb_base_key": "",
  "database_url": "https://catadeploy-standardenv.firebaseio.com"
}
```

`firebase_credentials.json` should be the service account credentials with Firebase permissions.

## Internal Catalyst Permission

Ask the president to be added to Catalyst-at-Duke organization. This organization is currently owned by Samantha Whitt.
