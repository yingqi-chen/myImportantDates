const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/')
    .get((req, res) => {
      res.send('this is albums.page');
    })
    .post((req, res) => {
      res.send('this is events/:id/post.page');
    })
    .delete((req, res) => {
      res.send('this is events/:id/delete.page');
    });

module.exports = router;
