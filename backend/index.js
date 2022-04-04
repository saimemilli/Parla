const express = require("express");
const bodyParser = require("body-parser");
const kindsRouter = require("./routes/kinds");
const unitsRouter = require("./routes/units");

require("./mongo–connection");

const app = express();

app.use(bodyParser.json());

app.use("/kinds", kindsRouter);
app.use("/units", unitsRouter);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
