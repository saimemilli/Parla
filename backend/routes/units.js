const router = require("express").Router();
const Unit = require("../models/unit");
const Question = require("../models/question");

router.get("/", async (reg, res) => {
  const units = await Unit.find();

  res.send(units);
});

router.post("/", async (req, res) => {
  const unit = await Unit.create(req.body);

  res.send(unit);
});

router.post("/:unitId/questions", async (req, res) => {
  const { unitId } = req.params;

  const unit = await Unit.findById(unitId);
  const question = await Question.create({
    ...req.body,
    unit: unitId,
  });

  unit.questions.push(question);
  await unit.save();

  res.send(question);
});

module.exports = router;
