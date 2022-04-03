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
});

UnitSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Unit", UnitSchema);
