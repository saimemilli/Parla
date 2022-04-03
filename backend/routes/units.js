const router = require("express").Router();
const Unit = require("../models/unit");

router.get("/", async (reg, res) => {
  const units = await Unit.find();

  res.send(units);
});

router.post("/", async (req, res) => {
  const unit = await Unit.create(req.body);

  res.send(unit);
});

module.exports = router;
