const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
  name: {
    type: String,
    required: true
  }
});
// This hook is called before saving the user to the database
userSchema.pre('save', function (next) {
  const user = this;

  // If the password hasn't been modified, move on
  if (!user.isModified('password')) {
    return next();
  }

  // Generate a salt and use it to hash the password
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }

      // Replace the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});


// This method is used to compare a plaintext password to the hashed one
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};


module.exports = mongoose.model("users", userSchema);
