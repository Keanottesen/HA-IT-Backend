'use strict'
const Playlist = require('../models').Playlist;
const db = require('../models');
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
    return db.sequelize.query('select * from "Playlists" inner join "PlaylistSongs" on "playlist_id" = "Playlists"."id" inner join "Songs" on "Songs"."id" = song_id where "Playlists"."id" = (:id)', {
      replacements: {id: req.query.playlist_id},
      type: db.sequelize.QueryTypes.SELECT
    })
    .then((playlist) => {
      const playlistId = playlist[0].playlist_id
      const playlistName = playlist[0].name
      const nbTracks = playlist.length

      const songs = playlist.map(x => {
        const artist = x.contributors.map(y => y.name)
        return {
          songId: x.id,
          songTitle: x.title,
          duration: x.duration,
          preview: x.preview,
          artists: artist
        }
      })

      res.status(200).send({
        playlistId: playlistId,
        playlistName: playlistName,
        nbTracks: nbTracks,
        songs: songs
      })
    })
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
