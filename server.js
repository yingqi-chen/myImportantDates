const express = require('express');
const listEndpoints = require('express-list-endpoints');
const mongoose = require('mongoose');
const app = express();
const PORT = 6000;
const routes = require('./routes');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors')
require('dotenv').config();

app.use(cors())
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

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, ()=>{
  console.log('connect succesfully!');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT||PORT}`);
  console.log(listEndpoints(app));
});
