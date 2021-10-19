const SchoolDetails = require("../models/Schooldetails");
const { validationResult } = require("express-validator");

exports.getDetails = (req, res, next) => {
  SchoolDetails.find().then((details) => {
    console.log(details);
    res.status(200).json({
      message: "School Details",
      data: details,
      // data: [
      //   {
      //     SchoolName: "ges",
      //     ImageUrl: details.ImageUrl,
      //     Address: details.Address,
      //   },
      // ],
    });
  });
};

exports.getSingleData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed, entered data is incorrent" });
  }
  const dataId = req.params.dataId;
  POST.findById(dataId)
    .then((data) => {
      if (!data) {
        const error = new Error("Couldn't find the data");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Data Fetched", data: data });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createDetails = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: "Validation failed, Please check your content length",
      errors: errors.array(),
    });
  }
  const schoolname = req.body.name;
  const address = req.body.address;
  // const imageUrl = req.body.imageUrl;
  const schooldetails = new SchoolDetails({
    SchoolName: schoolname,
    Address: address,
    ImageUrl: "images/school_logo.png",
  });
  schooldetails
    .save()
    .then((result) => {
      console.log("Created Details");
      res.status(201).json({
        message: "Created Details Successfully",
        data: {
          id: new Date().toISOString(),
          post: result,
        },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  // sending message that db got the data
};
