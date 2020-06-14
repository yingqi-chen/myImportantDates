const express = require('express');

const eventRoutes = require('./event_routes');


const User = require('../models/user');


// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', (req, res) => {
  User.init()
      .then( async ()=>{
        const user = new User(req.body);
        const result = await user.save();
        res.json(result);
      })
      .catch((err) => {
        res.json(err.message);
      });
});

router.route('/:id')
    .get(async (req, res) => {
      try {
        user = await User.findById(req.params.id);
        res.json({
          'name': user.name,
          'email': user.email,
          'eventIDs': user.eventIDs,
        });
      } catch (err) {
        res.json(err.message);
      }
    })
    .put((req, res) => {
      const id = req.params.id;
      user = req.body;
      User.findByIdAndUpdate(id, user, {new: true}, (err, user)=>{
        if (!err) {
          res.json({
            'name': user.name,
            'email': user.email,
            'eventIDs': user.eventIDs,
          });
        } else {
          res.json(err.message);
        };
      });
    });


router.use('/:id/events', eventRoutes);

module.exports = router;

