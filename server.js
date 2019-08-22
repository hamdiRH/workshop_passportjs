const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport Midleware
app.use(passport.initialize());

//passport Config
require("./config/passport")(passport);

var mongoDB = "mongodb://127.0.0.1/workshop";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/users", users);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
