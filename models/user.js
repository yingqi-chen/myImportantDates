/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
});

module.exports = mongoose.model('User', userSchema);
