const express = require('express');
const Event = require('../models/event');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');

router.use('/:id/album', albumRoutes);

router.route('/')
    .get((req, res) => {
      Event.find({ownerId: req.params.id}, (err, docs) =>{
        docs.length > 0? res.json(docs) : res.json({'message': 'You don\'t have any events right now.'});
      });
    })
    .post(async (req, res) => {
      event = new Event(req.body);
      event.ownerId = req.params.id;
      try {
        const result = await event.save();
        res.json(result);
      } catch (err) {
        res.json(err);
      }
    });

router.route('/:eventId')
    .get((req, res) => {
      eventId = req.params.eventId;
      event = Event.findById(eventId, (err, doc) =>{
        doc? res.send(doc):res.json({'message': 'There is no such event'})
      });
    })
    .put((req, res) => {
      const eventId = req.params.eventId;
      event = req.body;
      Event.findByIdAndUpdate(eventId, event, {new: true}, (err, doc)=>{
        !err? res.json(doc): res.json(err.message);
      });
    })
    .delete((req, res) => {
      const eventId = req.params.eventId;
      Event.findByIdAndDelete(eventId, (err, doc)=>{
        !err? res.json(doc): res.json(err.message);
      });
    });

module.exports = router;
