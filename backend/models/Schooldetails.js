const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  SchoolName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SchoolDetails", detailsSchema);

// const getDb = require("../util/database").getDb;

// class SchoolDetails {
//   constructor(name, address, imageUrl) {
//     this.name = name;
//     this.address = address;
//     this.imageUrl = imageUrl;
//   }

//   save() {
//     const db = getDb();
//     return db
//       .collection("schooldetails")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log("Err ==== ", err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("schooldetails")
//       .find()
//       .toArray()
//       .then((schooldetails) => {
//         console.log(schooldetails);
//         return schooldetails;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = SchoolDetails;
