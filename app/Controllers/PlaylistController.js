'use strict'
const Playlist = require('../models').Playlist;
const User = require('../models').User;
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
   return Playlist
     .findOne({
       where: {
          id: req.query.playlist_id,
         }
       })
     .then((playlist) => res.status(200).send(playlist))
     .catch((error) => res.status(400).send(error));
 },

  list(req, res) {
   return Playlist
     .findAll({
       where: {
           [Op.and]: [
             { owner_user_id: req.query.user_id },
             { deleted_at: null }
           ]
         }
       })
     .then((playlists) => res.status(200).send(playlists))
     .catch((error) => res.status(400).send(error));
 },

  create(req, res) {
    return Playlist
      .create({
        name: req.body.name,
        owner_user_id: req.body.owner_user_id,
      })
      .then(playlist => res.status(201).send(playlist))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return Playlist
    .findOne({
      where: {
        id: req.params.playlist_id,
      },
    })
    .then(playlist => {
      if (!playlist) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }

      return playlist
        .update({
          deleted_at: req.body.deleted_at || playlist.deleted_at,
        })
        .then(updatedPlaylist => res.status(200).send(updatedPlaylist))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},

//   destroy(req, res) {
//   return Playlist
//     .findOne({
//       where: {
//         id: req.body.playlist_id,
//       },
//     })
//     .then(playlist => {
//       if (!playlist) {
//         return res.status(404).send({
//           message: 'Playlist Not Found',
//         });
//       }
//
//       return playlist
//         .destroy()
//         .then(() => res.status(204).send())
//         .catch(error => res.status(400).send(error));
//     })
//     .catch(error => res.status(400).send(error));
// },



};
