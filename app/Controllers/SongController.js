'use strict'
const Song = require('../models').Song;
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
   return Song
     .findOne({
       where: {
          id: req.query.song_id,
         }
       })
     .then((song) => res.status(200).send(song))
     .catch((error) => res.status(400).send(error));
 },

 listByAlbum(req, res) {
  return Song
    .findAll({
        where: {
          album_id: req.query.album_id
        }
      })
    .then((songs) => res.status(200).send(songs))
    .catch((error) => res.status(400).send(error));
},

list(req, res) {
 return Song
   .findAll({
       where: {
         title: {
           [Op.iLike]: '%' + req.query.q + '%'
         }
       }
     })
   .then((songs) => res.status(200).send(songs))
   .catch((error) => res.status(400).send(error));
},



};
