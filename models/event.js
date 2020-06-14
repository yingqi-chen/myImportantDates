/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars

const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required.'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ownerId: {
    type: String,
    required: [true, 'You have to provide an owner ID to create an event.'],
  },
  description: {type: String},
  joiners: [{joinerID: Number}],
  albumID: {type: Number},
});

module.exports = mongoose.model('Event', eventSchema);
