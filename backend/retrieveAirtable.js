const Airtable = require("airtable");
const config = require("./config.json");

let airtableObj = new Airtable({
  apiKey: config.airtable_api_key,
  endpointUrl: "https://api.airtable.com",
});
let membersTable = airtableObj.base(config.catalystdb_base_key);

const MEMBER_TABLE_NAME = "Roster";
const MAX_BIO_LENGTH = 75;

const getAirtable = async (data) => {
  return new Promise((resolve, reject) => {
    membersTable(MEMBER_TABLE_NAME)
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
            personalurl: properties["Personal Website"] | "",
          }));
        resolve(members);
      });
  });
};

module.exports = {
  getAirtable: getAirtable,
};
