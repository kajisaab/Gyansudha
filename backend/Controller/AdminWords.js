const AdminWords = require("../models/AdminWords");
const { validationResult } = require("express-validator");

// fetching all the data
exports.getDescription = (req, res, next) => {
  AdminWords.find()
    .then((data) => {
      res.status(200).json({
        message: "School Description",
        description: data,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// fetching single description
exports.getSingleDescription = (req, res, next) => {
  const descriptionId = req.params.descriptionId;
  AdminWords.findById(descriptionId)
    .then((description) => {
      if (!description) {
        const error = new Error("Could not find the Description");
        error.statusCode = 404;
        throw error;
      }
      res
        .status(200)
        .json({ message: "Description fetched", description: description });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Creating the administration words
exports.createDescription = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(
      "Error while creating post, Please check the limitation"
    );
    error.statusCode = 401;
    throw error;
  }
  if (!req.file) {
    const error = new Error("No image Provided.");
    error.statusCode = 422;
    throw error;
  }
  const imageUrl = req.file.path;
  const Designation = req.body.Designation;
  const Description = req.body.Description;
  const Name = req.body.Name;
  const description = new AdminWords({
    Designation: Designation,
    Description: Description,
    Name: Name,
    ImageUrl: imageUrl,
  });
  description
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Administration Words Created Successfully",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next();
    });
};
