const express = require("express");
const app = express();
const _httpErrorPages = require("http-error-pages");
const port = process.env.PORT || 3000;
const maintenance = false

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

if (maintenance == true) {
  app.get("/", (req, res) => {
    res.render("maintenance/index.ejs")
  })
} else {
  app.get("/", (req, res) => {
    res.render("website/index.ejs")
  })
}

_httpErrorPages.express(app, {
  lang: "fr_FR",
  footer: "Problem ? corona.online@gallet.ga",
});

app.listen(port, function () {
  console.log(`Corona-Online listen at ${port} port`);
});
