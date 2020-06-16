const Event = require('../models/event');

const getEvents = (req, res) => {
  Event.find({ownerId: req.params.id}, (err, docs) =>{
      docs.length > 0? res.json(docs) : res.json({'message': 'You don\'t have any events right now.'});
  });
};


module.exports = {getEvents, createEvents};
