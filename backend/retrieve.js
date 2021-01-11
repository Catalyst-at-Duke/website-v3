const Airtable = require("airtable");
const config = require("./config.json");

let airtableObj = new Airtable({
  apiKey: config.airtable_api_key,
  endpointUrl: "https://api.airtable.com",
});
let catalystDb = airtableObj.base(config.catalystdb_base_key);

const MEMBER_TABLE_NAME = "Master Database";
const EXEC_TABLE_NAME = "Exec Database";
const MAX_BIO_LENGTH = 200;

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
        let exec = data
          .map((member) => member.fields)
          .map((properties) => ({
            Name: properties.Name,
            Photo: properties.Photo ? properties.Photo[0].url : null,
            Year: properties.Year ? properties.Year[0] : "",
            Github: properties.Github ? properties.Github[0] : "",
            Linkedin: properties.Linkedin ? properties.Linkedin[0] : "",
            Bio: properties.Bio || "",
            PersonalUrl: properties.PersonalUrl
              ? properties.PersonalUrl[0]
              : "",
            Position: properties.Position,
            Order: properties.Order,
          }));
        resolve(exec);
      });
  });
};

module.exports = {
  getMembers,
  getExec,
};
