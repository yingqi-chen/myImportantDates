const User = require('../models/user');

const createUser = (req, res) => {
  User.init()
      .then( async ()=>{
        const user = new User(req.body);
        const result = await user.save();
        res.json(result);
      })
      .catch((err) => {
        res.json(err.message);
      });
};

module.exports = {createUser};
