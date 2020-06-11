const express = require('express');
const Event = require('../models/event')
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');

router.use('/:id/album', albumRoutes);

router.route('/')
    .get((req, res) => {
      res.json("events page"); 
    })
    .post(async (req, res) => {
      event = new Event(req.body);
      const result = await event.save();
      res.send(req.params.id);
    });

router.route('/:id')
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
