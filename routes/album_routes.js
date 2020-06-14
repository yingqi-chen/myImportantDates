const express = require('express');
const Album = require('../models/album');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});


router.route('/')
    .get((req, res) => {
      Album.find({eventId: req.params.eventId}, (err, doc) =>{
        doc? res.json(doc) : res.json({'message': 'You don\'t have any albums right now.'});
      })
    })
    .post((req, res) => {
      res.send('this is events/:id/post.page');
    })
    .delete((req, res) => {
      res.send('this is events/:id/delete.page');
    });

module.exports = router;