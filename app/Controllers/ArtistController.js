'use strict'
const Artist = require('../models').Artist;
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
   return Artist
     .findOne({
       where: {
          id: req.query.artist_id,
         }
       })
     .then((artist) => res.status(200).send(artist))
     .catch((error) => res.status(400).send(error));
 },

 list(req, res) {
  return Artist
    .findAll({
        where: {
          name: {
            [Op.iLike]: '%' + req.query.q + '%'
          }
        }
      })
    .then((artists) => res.status(200).send(artists))
    .catch((error) => res.status(400).send(error));
},



};
