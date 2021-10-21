const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
  todo: { type: "string", require: true },
});
module.exports = new mongoose.model("ToDo", TodoSchema);
