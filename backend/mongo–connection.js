const mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost/parla", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection established"))
  .catch(console.log);
