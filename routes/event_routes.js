const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    res.send("this is events.page")
})

router.get('/new',(req,res) => {
    res.send("this is events/:id/new.page")
})

router.get('/:id/edit',(req,res) => {
    res.send("this is events/:id/new.page")
})

router.post('/',(req,res) => {
    res.send("this is events/:id/new.page")
})

router.get('/:id',(req,res) => {
    res.send("this is events/:id.page")
})

router.put('/:id',(req,res) => {
    res.send("this is events/:id/new.page")
})

router.delete('/:id',(req,res) => {
    res.send("this is events/:id/new.page")
})



module.exports = router