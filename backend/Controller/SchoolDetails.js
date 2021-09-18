const SchoolDetails = require("../models/Schooldetails");

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
  const schoolname = req.body.name;
  const address = req.body.address;
  const imageUrl = req.body.imageUrl;
  const schooldetails = new SchoolDetails({
    SchoolName: schoolname,
    Address: address,
    ImageUrl: imageUrl,
  });
  schooldetails
    .save()
    .then((result) => {
      console.log("Created Details");
      res.status(201).json({
        message: "Created Details Successfully",
        data: {
          id: new Date().toISOString(),
          SchoolName: schoolname,
          Address: address,
          logo: imageUrl,
        },
      });
    })
    .catch((err) => {
      console.log("Err ---> ", err);
    });
  // sending message that db got the data
};
