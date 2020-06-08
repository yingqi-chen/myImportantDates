const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/')
    .get((req, res) => {
      res.send('this is events.page');
    })
    .post((req, res) => {
      res.send('this is events/:id/post.page');
    });

router.get('/new', (req, res) => {
  res.send('new page');
});

router.get('/:id/edit', (req, res) => {
  res.send('edit page');
});

router.route('/:id')
    .get((req, res) => {
      res.send('this is events/:id.page');
    })
    .put((req, res) => {
      res.send('this is events/:id/put.page');
    })
    .delete((req, res) => {
      res.send('this is events/:id/delete.page');
    });

module.exports = router;
