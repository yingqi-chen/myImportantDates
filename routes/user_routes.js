const express = require('express');

const eventRoutes = require('./event_routes');

const User = require('../models/user');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', async (req, res) => {
  user = new User(req.body);
  try {
    const result = await user.save();
    res.json(result);
  } catch (err) {
    res.json(err.message);
  }
});

router.route('/:id')
    .get(async (req, res) => {
      try {
        user = await User.findById(req.params.id);
        res.json(user);
      } catch (err) {
        res.json({'message': 'There is no such user'});
      }
    })
    .put((req, res) => {
      const id = req.params.id;
      user = req.body;
      User.findByIdAndUpdate(id, user, {new: true}, (err, doc)=>{
        !err? res.json(doc): res.json(err.message);
      });
    });


router.use('/:id/events', eventRoutes);

module.exports = router;

