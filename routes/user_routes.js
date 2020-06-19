const express = require('express');
const eventRoutes = require('./event_routes');
// eslint-disable-next-line new-cap
const router = express.Router();
const validateUser = require('../validator');
const {getUser, updateUser, loginRequired, rightUser} = require('../controllers/usersController');

router.use(loginRequired);

router.route('/:id')
    .get(getUser)
    .put(rightUser, validateUser, updateUser);// You have to be the right user to change the user


router.use('/:id/events', eventRoutes);

module.exports = router;

