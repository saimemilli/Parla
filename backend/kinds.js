const router = require("express").Router();
const Kind = require("./kind");

router.get("/", async (req, res) => {
  const kinds = await Kind.find();
  res.send(kinds);
});

router.post("/", async (req, res) => {
  const kind = await Kind.create(req.body);

  res.send(kind);
});

module.exports = router;
