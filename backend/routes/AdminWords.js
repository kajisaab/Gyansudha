const express = require("express");
const { body } = require("express-validator");
const SchoolPost = require("../Controller/AdminWords");

const router = express.Router();

// fetching description
router.get("/getdescription", SchoolPost.getDescription);

// fetching single description
router.get("/getdescription/:descriptionId", SchoolPost.getSingleDescription);

// creating description
router.post(
  "/createdescription",
  [
    body("Designation").trim().isLength({ min: 3 }),
    body("Description").trim().isLength({ min: 10 }),
    body("Name").trim().isLength({ min: 5 }),
    body("image"),
  ],
  SchoolPost.createDescription
);

module.exports = router;
