'use strict'
const PlaylistSong = require('../models').PlaylistSong;
const { Op } = require("sequelize");

module.exports = {

  create(req, res) {
    return PlaylistSong
      .create({
        song_id: req.body.song_id,
        playlist_id: req.body.playlist_id,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return PlaylistSong
    .findOne({
      where: {
          [Op.and]: [
            { song_id: req.body.song_id },
            { playlist_id: req.body.playlist_id }
          ]
        }
    })
    .then(playlistSong => {
      if (!playlistSong) {
        return res.status(404).send({
          message: 'playlistSong Not Found',
        });
      }

      return playlistSong
        .update({
          deleted_at: req.body.deleted_at
        })
        .then(updatedUser => res.status(200).send(updatedUser))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},



};
