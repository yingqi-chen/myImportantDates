const express = require('express')

const event_routes = require("./event_routes")

const router = express.Router()

router.get('/',(req,res) => {
    res.send("this is users.page")
})

router.get('/:id',(req,res) => {
    res.send("this is users.page")
})

router.use('/:id/events', event_routes);

module.exports = router

