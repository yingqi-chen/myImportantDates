const express = require('express')

const event_routes = require("./event_routes")

const router = express.Router()

router.get('/',(req,res) => {
    res.send("this is users.page")
})

router.use('/events', event_routes);

module.exports = router

