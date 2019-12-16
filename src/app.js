const path = require("path");
const express = require("express");
const hbs = require("hbs");

const publicDirectoryPath = path.join(__dirname, "../public");

const app = express();

app.set("view engine", "hbs");

const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.render("weather", {});
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
