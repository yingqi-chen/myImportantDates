const express = require('express');

const eventRoutes = require('./event_routes');

const User = require('../models/user')

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', async (req, res) => {
  user = new User(req.body);
  const result = await user.save();
  res.json(result);
});

router.route('/:id')
    .get((req, res) => {
      res.json(req.params.id);
    })
    .post((req, res) => {
      res.send('this is userrr one post.page');
    })
    .put((req, res) => {
      res.send('this is use put.page');
    });


router.use('/:id/events', eventRoutes);

module.exports = router;

