'use strict'
const Song = require('../models').Song;
const { Op } = require("sequelize");
const db = require('../models');

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
  return db.sequelize.query('select "Songs".*, "Albums"."cover" from "Songs" inner join "Albums" on "Songs"."album_id" = "Albums"."api_id" where lower("Songs"."title") like :q', {
    replacements: {q: '%' + req.query.q + '%'},
    type: db.sequelize.QueryTypes.SELECT
  })
  .then(songs => res.status(200).send(songs))
  .catch(error => res.status(400).send(error));
},



};
