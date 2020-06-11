const express = require('express');
const listEndpoints = require('express-list-endpoints');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/my_important_dates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}, ()=>{
  console.log('connect succesfully!');
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
  console.log(listEndpoints(app));
});
