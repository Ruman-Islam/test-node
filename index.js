var express = require("express");
var app = express();
const router = express.Router();
const path = require("path");

// set the view engine to ejs
app.use(express.static(path.join("public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index.ejs");
  //   res.send("hello");
});

app.listen(5000);
console.log("Server is listening on port 5000");
