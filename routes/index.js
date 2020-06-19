const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const userRoutes = require('./user_routes');
const {login, signUp} = require('../controllers/usersController');
const validateUser = require('../validator');

router.use('/users', userRoutes);

router.post('/login', login);

router.post('/signup', validateUser, signUp);

module.exports = router;
