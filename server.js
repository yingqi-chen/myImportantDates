const express = require('express');
const listEndpoints = require('express-list-endpoints');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const routes = require('./routes');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

app.use(async (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT') {
    token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secretKey', (err, decoded) => {
      err? res.json(err.message) : req.user = decoded;
      next();
    } );
  } else {
    req.user = undefined;
    next();
  }
});

app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/my_important_dates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, ()=>{
  console.log('connect succesfully!');
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
  console.log(listEndpoints(app));
});
