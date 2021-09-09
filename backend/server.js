const express = require("express");
const SchoolDetailsRoute = require("./routes/SchoolDetails");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/schooldetails", SchoolDetailsRoute);

// app.use(express.urlencoded()); // for form data

// const port =
//   process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;

// app.listen(port, () =>
//   console.log("Your server is running in this port >>>>   " + port)
// );

app.listen(8080);
