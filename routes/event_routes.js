const express = require('express');
const Event = require('../models/event');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');

router.use('/:id/album', albumRoutes);

router.route('/')
    .get((req, res) => {
      Event.find({ownerId: req.params.id}, (err, docs) =>{
        docs.length > 0? res.json(docs.length) : res.json({'message': 'You don\'t have any events right now.'});
      });
    })
    .post(async (req, res) => {
      event = new Event(req.body);
      event.ownerId = req.params.id;
      try {
        const result = await event.save();
        res.json(result);
      } catch (err) {
        res.json(err.message);
      }
    });

router.route('/:event_id')
    .get((req, res) => {
      eventId = req.params.event_id;
      event = Event.findById(eventId, (err, doc) =>{
        res.send(doc);
      });
    })
    .put((req, res) => {
      const eventId = req.params.event_id;
      event = req.body;
      Event.findByIdAndUpdate(eventId, event, {new: true}, (err, doc)=>{
        res.json(doc);
      });
    })
    .delete((req, res) => {
      const eventId = req.params.event_id;
      Event.findByIdAndDelete(eventId, (err, doc)=>{
        res.json(doc);
      });
    });

module.exports = router;
