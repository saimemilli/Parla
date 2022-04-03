const mongoose = require("mongoose");

const UnitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  kind: {
    type: "ObjectId",
    ref: "Kind",
  },
  questions: [
    {
      type: "ObjectId",
      ref: "Question",
      autopopulate: true,
    },
  ],
});

UnitSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Unit", UnitSchema);
