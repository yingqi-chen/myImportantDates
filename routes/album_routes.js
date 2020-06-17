const express = require('express');
const Album = require('../models/album');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const {getAlbum, createAlbum} = require('../controllers/albumsController');
const {setEvent} = require('../controllers/eventsController');

router.use('/', setEvent)

router.route('/')
    .get(getAlbum)
    .post(createAlbum)
    .put((req, res) => {
      const eventId = req.params.eventId;
      album = req.body;
      Album.findOneAndUpdate({eventId}, album, {new: true}, (err, doc) => {
        !err? res.json(doc): res.json(err.message);
      });
    })
    .delete((req, res) => {
      const eventId = req.params.eventId;
      Album.findOneAndDelete({eventId: eventId}, (err, doc) => {
        !err? res.json(doc) : res.json(err.message);
      });
    });

module.exports = router;
