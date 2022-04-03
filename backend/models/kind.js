const mongoose = require("mongoose");

const KindSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  units: [
    {
      type: "ObjectId",
      ref: "Unit",
      autopopulate: true,
    },
  ],
});

KindSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Kind", KindSchema);
