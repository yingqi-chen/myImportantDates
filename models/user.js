/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required.'],
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'An email is required.'],
  },
  hashPassword: {
    type: String,
    required: [true, 'A password is required.'],
    minlength: 5,
  },
  eventIDs: [String],
});

userSchema.plugin(uniqueValidator, {message: "My custom error message."});
userSchema.methods.comparePasswords = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
}


module.exports = mongoose.model('User', userSchema);
