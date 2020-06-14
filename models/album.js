/* eslint-disable new-cap */
const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required.'],
  },
  date: {type: Date, default: Date.now},
  ownerId: {
    type: String,
    required: [true, 'You have to provide an owner ID to create an album.'],
  },
  description: {type: String},
  joiners: [{joinerID: Number}],
  eventId: {
    type: String,
    required: [true, 'You have to provide an event ID to create an album.']
  }
});

module.exports = mongoose.model('Album', albumSchema);
