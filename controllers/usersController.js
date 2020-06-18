const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const setUser = (req, res, next) => {
  userId = req.params.id;
  User.findById(userId, (err, user) => {
    err? res.json('Can\'t find the user') : res.locals.user = user;
    next();
  });
};// have to change this, since this user is the URL user, not the token user

const rightUser = (req, res, next) => {
  req.user && req.user.id===req.params.id? next() : res.json({'message': 'You don\'t have access to do this.'});
}

const login = async (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) res.json(err.message);
    if (!user) res.json({'message': 'User not found'});
    else if (user && user.comparePasswords(req.body.password, user.hashPassword)) {
      res.json({'token': jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        eventIDs: user.eventIDs,
      }, 'secretKey'),
      });
    } else {
      res.send({'message': 'Your password and email doesn\'t match.'});
    }
  });
};

const loginRequired = (req, res, next) => {
  req.user? next() : res.json({'message': 'You have to log in first.'});
};


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

const signUp = (req, res) => {
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
  user.hashPassword = bcrypt.hashSync(req.body.password, 10);
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

module.exports = {getUser, signUp, updateUser, login, loginRequired, setUser, rightUser};
