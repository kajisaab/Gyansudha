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
