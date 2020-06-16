const express = require('express');
const eventRoutes = require('./event_routes');
const User = require('../models/user');
// eslint-disable-next-line new-cap
const router = express.Router();
const validateUser = require('../validator');
const createUser = require('../controllers/usersController').createUser


router.post('/', validateUser, createUser );

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
    });
    // .put([
    //   check('email').isEmail(),
    //   check('password').isLength({min: 5, max: 10}),
    // ], (req, res) => {
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(422).json({errors: errors.array()});
    //   }
    //   const id = req.params.id;
    //   user = req.body;
    //   User.findByIdAndUpdate(id, user, {new: true}, (err, user)=>{
    //     if (!err) {
    //       res.json({
    //         'name': user.name,
    //         'email': user.email,
    //         'eventIDs': user.eventIDs,
    //       });
    //     } else {
    //       res.json(err.message);
    //     };
    //   });
    // });


router.use('/:id/events', eventRoutes);

module.exports = router;

