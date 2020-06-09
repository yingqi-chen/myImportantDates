/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {type: String},
  date: {type: Date, default: Date.now},
  ownerId: {type: Number},
  description: {type: String},
  joiners: [{joinerID: Number}],
  album: {albumsID: Number}
});

module.exports = mongoose.model('Event', eventSchema);
