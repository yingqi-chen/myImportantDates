/* eslint-disable new-cap */
const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
  name: {type: String},
  date: {type: Date, default: Date.now},
  ownerId: {type: Number},
  description: {type: String},
  joiners: [{joinerID: Number}],
  eventID: {type: String}
});

module.exports = mongoose.model('Album', albumSchema);
