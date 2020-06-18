const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');
const {getEvents, createEvents, getEvent, editEvent, deleteEvent, setEvent} = require('../controllers/eventsController');
const {setUser} = require('../controllers/usersController');

router.use('/:eventId/album', albumRoutes);
router.use('/', setUser);
router.use('/:eventId', setEvent);

router.route('/')
    .get(getEvents)
    .post(createEvents);

router.route('/:eventId')
    .get(getEvent)
    .put(editEvent)
    .delete(deleteEvent);

module.exports = router;
