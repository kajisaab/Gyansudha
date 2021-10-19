const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const SchoolDetailContainer = require("../Controller/SchoolDetails");

// GET /schooldetails/details
router.get("/details", SchoolDetailContainer.getDetails);

// POST /schooldetails/createdetails
router.post(
  "/createdetails",
  [
    body("schoolname").trim().isLength({ min: 5 }),
    body("address").trim().isLength({ min: 5 }),
  ],
  SchoolDetailContainer.createDetails
);

module.exports = router;
