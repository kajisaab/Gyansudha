exports.getDetails = (req, res, next) => {
  res.status(200).json({
    SchoolName: "Gyansudha School",
    logo: "This is logo",
  });
};

exports.createDetails = (req, res, next) => {
  (SchoolName = req.body.SchoolName), (logo = req.body.logo);
  // sending message that db got the data
  res.status(201).json({
    message: "Created Post Successfully",
    data: { id: new Date().toISOString(), SchoolName: SchoolName, logo: logo },
  });
};
