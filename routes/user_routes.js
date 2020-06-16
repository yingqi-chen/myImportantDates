const express = require('express');
const eventRoutes = require('./event_routes');
const User = require('../models/user');
// eslint-disable-next-line new-cap
const router = express.Router();
const validateUser = require('../validator');
const {createUser,updateUser} = require('../controllers/usersController');


router.post('/', validateUser, createUser);

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
    .put(validateUser, updateUser);


router.use('/:id/events', eventRoutes);

module.exports = router;

