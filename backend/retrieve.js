const Airtable = require("airtable");
const config = require("./config.json");
const {
  downloadAndCompress,
  uploadToFirebase,
  cleanUp,
  fileExists,
} = require("./processPhoto");

let airtableObj = new Airtable({
  apiKey: config.airtable_api_key,
  endpointUrl: "https://api.airtable.com",
});
let catalystDb = airtableObj.base(config.catalystdb_base_key);

const MEMBER_TABLE_NAME = "Master Database";
const EXEC_TABLE_NAME = "Exec Database";

// retrieve members from airtable
const getMembers = (forceUpdatePhotos) => {
  return new Promise((resolve, reject) => {
    catalystDb(MEMBER_TABLE_NAME)
      .select()
      .all(async (err, data) => {
        if (err) reject(err);
        // map to fields, then store only fields we want.
        let members = data
          .map((member) => member.fields)
          .filter((properties) => properties.Status !== "Alumnus") // needs to be updated in the Airtable annually
          .map((properties) => ({
            name: properties.Name,
            photo: properties.Photo ? properties.Photo[0].url : null,
            year: properties.Year || "",
            github: properties.Github || "",
            linkedinurl: properties.LinkedIn || "",
            bio: properties.Bio ? properties.Bio : "",
            personalurl: properties["Personal Website"] || "",
          }));

        // members = members.slice(0, 10);
        // iterate through photos, download, then compress
        for (let idx = 0; idx < members.length; idx++) {
          let filename =
            members[idx].name.replace(/\s+/g, "-").toLowerCase() + ".jpg";
          let photoExists = await fileExists(filename);
          // if doesn't exist or force update
          if (!photoExists || forceUpdatePhotos) {
            console.log("Compressing " + members[idx].name);
            let [filename, photoLocation] = await downloadAndCompress(
              members[idx],
              members[idx].photo
            );
            console.log("Uploading " + photoLocation);
            let url = await uploadToFirebase(filename, photoLocation);
            members[idx].photo = url;
          } else {
            console.log(`Already found ${filename} in storage. Skipping...`);
          }
          console.log(`Finished ${idx + 1}/${members.length}`);
        }

        cleanUp();
        resolve(members);
      });
  });
};

// retrieve exec from airtable
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
