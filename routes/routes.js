const UserController = require('../app/controllers').UserController;
const AlbumController = require('../app/controllers').AlbumController;
const ArtistController = require('../app/controllers').ArtistController;
const CurrentSongController = require('../app/controllers').CurrentSongController;
const PlaylistController = require('../app/controllers').PlaylistController;
const PlaylistSongController = require('../app/controllers').PlaylistSongController;
const SongController = require('../app/controllers').SongController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

   app.get('/api/user', UserController.show);
   app.post('/api/createUser', UserController.create);
   //change to put
   app.post('/api/updateUser', UserController.update);


   app.get('/api/playlist', PlaylistController.show);
   app.get('/api/userPlaylists', PlaylistController.list);
   app.post('/api/createPlaylist', PlaylistController.create);
   app.put('/api/updatePlaylist/:playlist_id', PlaylistController.update);
   // app.delete('/api/deletePlaylist', PlaylistController.destroy);


   
};
