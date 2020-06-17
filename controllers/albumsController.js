const Album = require('../models/album');

const getAlbum = (req, res) => {
  Album.findOne({eventId: req.params.eventId}, (err, doc) =>{
      doc? res.json(doc) : res.json({'message': 'You don\'t have any albums right now.'});
  });
};


module.exports = {getAlbum};
