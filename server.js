const express = require('express')
const listEndpoints = require('express-list-endpoints')
const path = require('path')

const app = express();

const PORT = 5000;

const routes = require('./routes')

app.use("/", routes)

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'./views') )

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
    console.log(listEndpoints(app));
})