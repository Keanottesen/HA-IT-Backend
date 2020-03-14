'use strict'
const Artist = require('../models').Artist;
const db = require('../models');
const { Op } = require("sequelize");

module.exports = {

  show(req, res) {
    return db.sequelize.query('select "Artists"."name" as "artistName", "Artists"."picture" as "artistPicture", "Artists"."nb_albums" as "artistAlbums", "Albums"."id" as "albumId", "Albums"."title" as "albumTitle", "Albums"."contributors" as "albumContributors", "Albums"."cover" as "albumCover", "Songs"."id" as "songId", "Songs"."api_id" as "song_api_id", "Songs"."preview" as "songPreview", "Songs"."title" as "songTitle", "Songs"."contributors" as "songContributors", "Songs"."duration" as "songDuration" from "Artists" inner join "Albums" on "Artists"."api_id" = "Albums"."artist_id" inner join "Songs" on "Albums"."api_id" = "Songs"."album_id" where "Artists"."id" = (:id)', {
      replacements: {id: req.query.artist_id,},
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(artist => {
      const name = artist[0].artistName
      const picture = artist[0].artistPicture
      const nb_albums = artist[0].artistAlbums

      const albumsUniqueByKey = [...new Map(artist.map(item =>
        [item['albumId'], item])).values()];

      const albums = albumsUniqueByKey.map(x => {
        const albumContributors = x.albumContributors.map(y => y.name)
        return {
          albumId: x.albumId,
          albumTitle: x.albumTitle,
          albumCover: x.albumCover,
          albumContributors: albumContributors
        }
      })

      const songs = artist.map(x => {
        const songContributors = x.songContributors.map(y => y.name)
        return {
          songId: x.songId,
          api_id: x.song_api_id,
          songTitle: x.songTitle,
          songPreview: x.songPreview,
          songDuration: x.songDuration,
          songContributors: songContributors,
          songAlbumCover: x.albumCover
        }
      })

      res.status(200).send({
        artistName: name,
        artistPicture: picture,
        artistAlbums: nb_albums,
        albums: albums,
        songs: songs
      })
    })
    .catch(error => res.status(400).send(error));
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
