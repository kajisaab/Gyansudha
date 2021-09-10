const express = require("express");

const router = express.Router();

const SchoolDetailContainer = require("../Controller/SchoolDetails");

// GET /schooldetails/details
router.get("/details", SchoolDetailContainer.getDetails);

// POST /schooldetails/createdetails
router.post("/createdetails", SchoolDetailContainer.createDetails);

module.exports = router;
