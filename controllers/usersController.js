const User = require('../models/user');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (user.comparePasswords(req.body.password, user.hashPassword)) {
      res.send('good pass');
    } else {
      res.send('not work');
    }
  });
};

// const loginRequired

const getUser = async (req, res) => {
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
};

const createUser = (req, res) => {
  User.init()
      .then( async ()=>{
        const user = new User(req.body);
        user.hashPassword = bcrypt.hashSync(req.body.password, 10);
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

module.exports = {getUser, createUser, updateUser,login};
