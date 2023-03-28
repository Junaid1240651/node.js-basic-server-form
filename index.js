const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();

// ejs setup
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");

// bodyParser setup

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/processing", (req, res) => {
  console.log(req.body.userName);
  console.log(req.body.Password);
  if (req.body.userName == "admin" && req.body.Password == "admin@123") {
    res.redirect("/success");
  } else {
    res.redirect("/faliure");
  }
});

app.get("/success", (req, res) => {
  res.send("success");
});
app.get("/faliure", (req, res) => {
  res.send("faliure");
});

app.listen(3000, () => {
  console.log("Successfully connected");
});
