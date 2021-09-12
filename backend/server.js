const express = require("express");
const SchoolDetailsRoute = require("./routes/SchoolDetails");
const authRoute = require("./routes/auth");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

app.use(express.json());

app.use("/schooldetails", SchoolDetailsRoute);
app.use("/auth", authRoute);

// app.use(express.urlencoded()); // for form data

// const port =
//   process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;

// app.listen(port, () =>
//   console.log("Your server is running in this port >>>>   " + port)
// );

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const data = error.data;
  res.status(status).json({ data: data });
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
