const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String },
  surname: { type: String },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: { type: String, select: false },
});

module.exports = mongoose.model("User", UserSchema);
