const mongoose = require("mongoose");
const LoginSchema = mongoose.Schema({
  email: { type: "string", require: true },
  name: { type: "string", require: true },
  password: { type: "string", require: true },
  number: { type: "string", require: true },
});
module.exports = new mongoose.model("Login", LoginSchema);
