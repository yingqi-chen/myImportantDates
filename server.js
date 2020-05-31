const express = require('express')
const listEndpoints = require('express-list-endpoints')

const app = express();

const PORT = 5000;

const routes = require('./routes')

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
    console.log(listEndpoints(app));
})