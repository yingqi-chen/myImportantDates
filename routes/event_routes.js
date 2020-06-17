const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});
const albumRoutes = require('./album_routes');
const {getEvents, createEvents} = require('../controllers/eventsController');

router.use('/:eventId/album', albumRoutes);

router.route('/')
    .get(getEvents)
    .post(createEvents);

// router.route('/:eventId')
//     .get((req, res) => {
//       eventId = req.params.eventId;
//       event = Event.findById(eventId, (err, doc) =>{
//         doc? res.send(doc):res.json({'message': 'There is no such event'})
//       });
//     })
//     .put((req, res) => {
//       const eventId = req.params.eventId;
//       event = req.body;
//       Event.findByIdAndUpdate(eventId, event, {new: true}, (err, doc)=>{
//         !err? res.json(doc): res.json(err.message);
//       });
//     })
//     .delete((req, res) => {
//       const eventId = req.params.eventId;
//       Event.findByIdAndDelete(eventId, (err, doc)=>{
//         !err? res.json(doc): res.json(err.message);
//       });
//     });

module.exports = router;
