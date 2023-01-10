const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'client',
  },
  name:{ 
    type:String,
    required: true
  }
});

module.exports = mongoose.model("users", userSchema);
