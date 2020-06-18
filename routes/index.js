const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const userRoutes = require('./user_routes');
// const {login} = require('../controllers/usersController');

router.use('/users', userRoutes);

// router.post('/login', login);

module.exports = router;
