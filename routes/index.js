const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const userRoutes = require('./user_routes');


router.get('/', (req, res) => {
  res.render('page/index.ejs');
});

router.use('/users', userRoutes);


module.exports = router;
