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

const updateUser = (req, res) => {
  const id = req.params.id;
  user = req.body;
  User.findByIdAndUpdate(id, user, {new: true}, (err, user)=>{
    if (!err) {
      res.json({
        'name': user.name,
        'email': user.email,
        'eventIDs': user.eventIDs,
      });
    } else {
      res.json(err.message);
    };
  });
};

module.exports = {createUser, updateUser};
