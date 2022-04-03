const router = require("express").Router();
const Kind = require("../models/kind");
const Unit = require("../models/unit");

router.get("/", async (req, res) => {
  const kinds = await Kind.find();

  res.send(kinds);
});

router.post("/", async (req, res) => {
  const kind = await Kind.create(req.body);

  res.send(kind);
});

router.post("/:kindId/units", async (req, res) => {
  const { kindId } = req.params;
  const { name } = req.body;

  const kind = await Kind.findById(kindId);
  const unit = await Unit.create({
    name,
    kind: kindId
  });

  kind.units.push(unit);
  await kind.save();

  res.send(unit);
});

module.exports = router;
