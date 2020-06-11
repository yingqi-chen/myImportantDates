const express = require('express');

const eventRoutes = require('./event_routes');

const User = require('../models/user');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', async (req, res) => {
  user = new User(req.body);
  const result = await user.save();
  res.json(result);
});

router.route('/:id')
    .get(async (req, res) => {
      user = await User.findById(req.params.id);
      res.json(user);
    })
    .put((req, res) => {
      const id = req.params.id;
      user = req.body.user;
      User.findByIdAndUpdate(id, user, {new: true}, (err, doc)=>{
        res.json(doc);
      });
    });


router.use('/:id/events', eventRoutes);

module.exports = router;

