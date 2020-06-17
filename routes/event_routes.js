const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');
const {getEvents, createEvents, setUser, getEvent, editEvent} = require('../controllers/eventsController');

router.use('/:eventId/album', albumRoutes);
router.use('/', setUser);

router.route('/')
    .get(getEvents)
    .post(createEvents);

router.route('/:eventId')
    .get(getEvent)
    .put(editEvent)
//     .delete((req, res) => {
//       const eventId = req.params.eventId;
//       Event.findByIdAndDelete(eventId, (err, doc)=>{
//         !err? res.json(doc): res.json(err.message);
//       });
//     });

module.exports = router;
