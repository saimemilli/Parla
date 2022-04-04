const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize").sanitize;
const kindsRouter = require("./routes/kinds");
const unitsRouter = require("./routes/units");

require("./mongo–connection");

const app = express();

app.use(helmet());

app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  req.body = sanitize(req.body);
  req.headers = sanitize(req.headers);
  req.params = sanitize(req.params);
  next();
});

app.use("/kinds", kindsRouter);
app.use("/units", unitsRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err);

  res.status(err.status || 500);
  res.send(
    req.app.get("env") === "development"
      ? { stack: err.stack, message: err.message }
      : { message: err.message }
  );
});

module.exports = app;
