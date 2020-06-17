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
};

const editAlbum = (req, res) => {
  const eventId = req.params.eventId;
  album = req.body;
  Album.findOneAndUpdate({eventId}, album, {new: true}, (err, doc) => {
    !err? res.json(doc): res.json(err.message);
  });
};

const deleteAlbum = (req, res) => {
  const eventId = req.params.eventId;
  Album.findOneAndDelete({eventId: eventId}, (err, doc) => {
    !err? res.json(doc) : res.json(err.message);
  });
};


module.exports = {getAlbum, createAlbum, editAlbum, deleteAlbum};
