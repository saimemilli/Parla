const mongoose = require("mongoose");

const KindSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Kind", KindSchema);
