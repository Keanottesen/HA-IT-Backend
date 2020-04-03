const axios = require("axios");
require('dotenv').config();
const artistsIds = require('./app//config/artistIds');
const {Song, Artist, Album} = require('./app/models');
var Sequelize = require('sequelize');

(async function getAllArtists() {
 const {count: artistCount, rows: artists} = await Artist.findAndCountAll()
 const {count: songCount, rows: songs} = await Song.findAndCountAll()
 const {count: albumCount, rows: albums} = await Album.findAndCountAll()

 if (artistCount == 0) {
   for (var i = 0; i < artistsIds.length; i++) {
     console.log(artistsIds[i]);
     axios({
         "method":"GET",
         "url":"https://deezerdevs-deezer.p.rapidapi.com/artist/" + artistsIds[i],
         "headers":{
         "content-type":"application/octet-stream",
         "x-rapidapi-host":process.env.X_RapidAPI_Host,
         "x-rapidapi-key":process.env.X_RapidAPI_Key
         }
         })
         .then((response)=>{
           const artistInfo = response.data

           Artist.create({
               api_id: artistInfo.id,
               name: artistInfo.name,
               picture: artistInfo.picture,
               nb_albums: artistInfo.nb_album,
               tracklist: artistInfo.tracklist
           })
           .then(artist => console.log(artist))
           .catch(err => console.log(err))

         })
         .catch((error)=>{
           console.log(error)
         })
   }
 }

 if (songCount == 0 && artistCount > 0) {
  for (var i = 0; i < artists.length; i++) {
    const artist = artists[i].dataValues

    axios({
        "method":"GET",
        "url": artist.tracklist,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":process.env.X_RapidAPI_Host,
        "x-rapidapi-key":process.env.X_RapidAPI_Key
        }
        })
        .then((response)=>{
          const data = response.data.data

          for (var i = 0; i < data.length; i++) {
            Song.create({
                api_id: data[i].id,
                title: data[i].title,
                duration: data[i].duration,
                preview: data[i].preview,
                contributors: data[i].contributors,
                album_id: data[i].album.id,
                artist_id: artist.api_id
            })
            .then(song => console.log(song))
            .catch(err => console.log(err))
          }
        })
        .catch((error)=>{
          console.log(error)
        })

  }
}

  const album_ids = await Song.findAll({
      attributes: [
          [Sequelize.fn('DISTINCT', Sequelize.col('album_id')) ,'album_id'],
      ]
  })

  if (songCount != 0 && albumCount == 0) {
    for (var i = 0; i < album_ids.length; i++) {
      const album = album_ids[i].dataValues.album_id

      setTimeout(() => {
        axios({
            "method":"GET",
            "url":"https://deezerdevs-deezer.p.rapidapi.com/album/" + album,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":process.env.X_RapidAPI_Host,
            "x-rapidapi-key":process.env.X_RapidAPI_Key
            }
            })
            .then((response)=>{
              const album = response.data
              console.log(album);
                Album.create({
                    api_id: album.id,
                    title: album.title,
                    ups: album.ups,
                    cover: album.cover,
                    label: album.label,
                    duration: album.duration,
                    nb_tracks: album.nb_tracks,
                    release_date: album.release_date,
                    contributors: album.contributors,
                    tracklist: album.tracklist,
                    artist_id: album.artist.id
                })
                .then(album => console.log(album))
                .catch(err => console.log(err))
            })
            .catch((error)=>{
              console.log(error)
            })
      }, i * 1000);




    }
  }


})()
