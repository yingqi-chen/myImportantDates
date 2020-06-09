const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const userRoutes = require('./user_routes');

router.use('/users', userRoutes);

module.exports = router;
