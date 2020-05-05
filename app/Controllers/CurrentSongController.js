// 'use strict'
// const CurrentSong = require('../models').CurrentSong;
// const { Op } = require("sequelize");
//
// module.exports = {
//
//   create(req, res) {
//     return CurrentSong
//       .create({
//         song_id: req.body.song_id,
//         user_id: req.body.user_id
//       })
//       .then(currentSong => res.status(201).send(currentSong))
//       .catch(error => res.status(400).send(error));
//   },
//
//   update(req, res) {
//   return CurrentSong
//     .findOne({
//       where: {
//         id: req.params.id,
//       },
//     })
//     .then(currentSong => {
//       return currentSong
//         .update({
//           finished_at: req.body.finished_at
//         })
//         .then(currentSong => res.status(200).send(currentSong))
//         .catch(error => res.status(400).send(error));
//     })
//     .catch(error => res.status(400).send(error));
// },
// };
