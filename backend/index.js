const express = require("express");
const bodyParser = require("body-parser");
const kindsRouter = require("./kinds");

require("./mongo–connection");

const app = express();

app.use(bodyParser.json());

app.use("/kinds", kindsRouter);

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
