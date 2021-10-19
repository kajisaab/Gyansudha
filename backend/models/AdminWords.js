const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminWordsSchema = new Schema(
  {
    Designation: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdminWords", AdminWordsSchema);
