const express = require('express')

const event_routes = require("./event_routes")

const router = express.Router()

router.route("/")
  .get((req,res) => {
    res.send("this is users.page")
  })
  .post((req,res) => {
    res.send("this is use post.page")
  })

router.get('/new',(req,res) => {
    res.send("this is users/new.page")
})

router.get('/:id/edit',(req,res) => {
    res.send("this is users/edit.page")
})

router.route("/:id")
  .get((req,res) => {
    res.send("this is a user.page")
  })
  .post((req,res) => {
    res.send("this is userrr one post.page")
  })
  .put((req,res) => {
    res.send("this is use put.page")
  })


router.use('/:id/events', event_routes);

module.exports = router

