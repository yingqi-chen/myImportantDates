const express = require('express');
const Event = require('../models/event')
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');

router.use('/:id/album', albumRoutes);

router.route('/')
    .get((req, res) => {
      Event.find({ownerId: req.params.id}, (err, doc) =>{
        res.json(doc);
      });
    })
    .post(async (req, res) => {
      event = new Event(req.body);
      event.ownerId = req.params.id;
      const result = await event.save();
      res.send(result);
    });

router.route('/:event_id')
    .get((req, res) => {
      res.send('this is events/:id.page');
    })
    .put((req, res) => {
      res.send('this is events/:id/put.page');
    })
    .delete((req, res) => {
      res.send('this is events/:id/delete.page');
    });

module.exports = router;
