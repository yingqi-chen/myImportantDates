const express = require('express')
const listEndpoints = require('express-list-endpoints')
const path = require('path')
const mongoose = require('mongoose')

const app = express();

const PORT = 5000;

const routes = require('./routes')

app.use("/", routes)

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views') )

mongoose.connect('mongodb://localhost:27017/my_important_dates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
},()=>{
   console.log("connect succesfully!")
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
    console.log(listEndpoints(app));
})