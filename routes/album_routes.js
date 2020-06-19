const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const {getAlbum, createAlbum, editAlbum, deleteAlbum} = require('../controllers/albumsController');
const {setEvent} = require('../controllers/eventsController');

router.use('/', setEvent)

router.route('/')
    .get(getAlbum)
    .post(createAlbum)
    .put(editAlbum)
    .delete(deleteAlbum);

module.exports = router;
