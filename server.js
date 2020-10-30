const express = require("express");
const app = express();
const routeur = express.Router();

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("maintenance/index.ejs");
});

app.listen(8800);
