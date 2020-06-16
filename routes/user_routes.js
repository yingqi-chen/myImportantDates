const express = require('express');
const eventRoutes = require('./event_routes');
// eslint-disable-next-line new-cap
const router = express.Router();
const validateUser = require('../validator');
const {getUser, createUser, updateUser} = require('../controllers/usersController');


router.post('/', validateUser, createUser);

router.route('/:id')
    .get(getUser)
    .put(validateUser, updateUser);


router.use('/:id/events', eventRoutes);

module.exports = router;

