const Airtable = require("airtable");
const config = require("./config.json");

let airtableObj = new Airtable({
  apiKey: config.airtable_api_key,
  endpointUrl: "https://api.airtable.com",
});
let catalystDb = airtableObj.base(config.catalystdb_base_key);

const MEMBER_TABLE_NAME = "Master Database";
const EXEC_TABLE_NAME = "Exec Database";
const MAX_BIO_LENGTH = 75;

const getMembers = async (data) => {
  return new Promise((resolve, reject) => {
    catalystDb(MEMBER_TABLE_NAME)
      .select()
      .all((err, data) => {
        if (err) reject(err);
        let members = data
          .map((member) => member.fields)
          .filter((properties) => properties.Status !== "Alumnus") // needs to be updated in the Airtable annually
          .map((properties) => ({
            name: properties.Name,
            photo: properties.Photo ? properties.Photo[0].url : null,
            year: properties.Year || "",
            github: properties.Github || "",
            linkedinurl: properties.LinkedIn || "",
            bio: properties.Bio
              ? properties.Bio.substring(0, MAX_BIO_LENGTH)
              : "",
            personalurl: properties["Personal Website"] || "",
          }));
        resolve(members);
      });
  });
};

const getExec = async (data) => {
  return new Promise((resolve, reject) => {
    catalystDb(EXEC_TABLE_NAME)
      .select()
      .all((err, data) => {
        if (err) reject(err);
        let exec = data.map((member) => member.fields);
        resolve(exec);
      });
  });
};

module.exports = {
  getMembers,
  getExec,
};
