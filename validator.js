const {check, validationResult} = require('express-validator');

const validateUser = [
  check('email').isEmail(),
  check('password').isLength({min: 5, max: 10}),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    next();
  }];

module.exports = validateUser;
