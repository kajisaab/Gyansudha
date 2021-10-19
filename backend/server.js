const express = require("express");
const SchoolDetailsRoute = require("./routes/SchoolDetails");
const SchoolDescriptionRoute = require("./routes/AdminWords");
const authRoute = require("./routes/auth");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
app.use(cors());

app.use(express.json());

// to view the static image
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/schooldetails", SchoolDetailsRoute);
app.use("/description", SchoolDescriptionRoute);
app.use("/auth", authRoute);

// To store the data in the local space
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // This is pointing to the path images
    cb(null, "images");
  },

  // This function will give the name to the particular image
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));

// app.use(express.urlencoded()); // for form data

// const port =
//   process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;

// app.listen(port, () =>
//   console.log("Your server is running in this port >>>>   " + port)
// );

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Error Handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ data: data, message: message });
});

mongoose
  .connect(
    "mongodb+srv://kajisaab:p9vuPL9dYasb5k3Q@cluster0.mptni.mongodb.net/Gyansudha_English_School?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
