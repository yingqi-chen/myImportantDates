const Album = require('../models/album');


const getAlbum = (req, res) => {
  Album.findOne({eventId: req.params.eventId}, (err, doc) =>{
      doc? res.json(doc) : res.json({'message': 'You don\'t have any albums right now.'});
  });
};

const createAlbum = (req, res) => {
  Album.findOne({eventId: req.params.eventId}, async (err, doc) =>{
    if (doc) {
      res.json({'message': 'You can only create one album.'});
    } else {
      try {
        album = new Album(req.body);
        album.ownerId = req.params.id;
        album.eventId = req.params.eventId;
        const result = await album.save();
        res.json(result);
      } catch (err) {
        res.send(err.message);
      }
    }
  });
}



module.exports = {getAlbum, createAlbum};
