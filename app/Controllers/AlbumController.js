'use strict'
const Album = require('../models').Album;
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
   return Album
     .findOne({
       where: {
          id: req.query.album_id,
         }
       })
     .then((album) => res.status(200).send(album))
     .catch((error) => res.status(400).send(error));
 },

 listByArtist(req, res) {
  return Album
    .findAll({
        where: {
          artist_id: req.query.artist_id
        }
      })
    .then((albums) => res.status(200).send(albums))
    .catch((error) => res.status(400).send(error));
},

list(req, res) {
 return Album
   .findAll({
       where: {
         title: {
           [Op.iLike]: '%' + req.query.q + '%'
         }
       }
     })
   .then((albums) => res.status(200).send(albums))
   .catch((error) => res.status(400).send(error));
},



};
