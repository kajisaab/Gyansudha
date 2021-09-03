const express = require("express");
const bodyParser = require("body-parser");

const feedRoute = require("./routes/feed");

const app = express();

app.use("/feed", feedRoute);

// const port =
//   process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;

// app.listen(port, () =>
//   console.log("Your server is running in this port >>>>   " + port)
// );

app.listen(8080);
