const express = require("express");
const app = express();
const routeur = express.Router();
const port = process.env.PORT || 3000;

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("maintenance/index.ejs");
});
app.get("/site", (req, res) => {
  res.render("website/index.ejs");
});

app.listen(port, function () {
  console.log("Server started successfully");
});
