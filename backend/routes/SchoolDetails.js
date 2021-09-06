const express = require("express");

const router = express.Router();

const SchoolDetailContainer = require("../Controller/SchoolDetails");

router.get("/details", SchoolDetailContainer.getDetails);

router.post("/createdetails", SchoolDetailContainer.createDetails);

module.exports = router;
