const UserController = require('../app/controllers').UserController;
const AlbumController = require('../app/controllers').AlbumController;
const ArtistController = require('../app/controllers').ArtistController;
const CurrentSongController = require('../app/controllers').CurrentSongController;
const PlaylistController = require('../app/controllers').PlaylistController;
const PlaylistSongController = require('../app/controllers').PlaylistSongController;
const SongController = require('../app/controllers').SongController;

module.exports = (app) => {

   app.get('/api/user', UserController.show);
   app.post('/api/createUser', UserController.create);
   app.post('/api/validateUser', UserController.validate);
   app.put('/api/updateUser/:user_id', UserController.update);
   // app.delete('/api/deleteUser', UserController.destroy);

   app.get('/api/playlist', PlaylistController.show);
   app.get('/api/userPlaylists', PlaylistController.list);
   app.post('/api/createPlaylist', PlaylistController.create);
   app.put('/api/updatePlaylist/:playlist_id', PlaylistController.update);
   // app.delete('/api/deletePlaylist', PlaylistController.destroy);

   app.post('/api/createPlaylistSong', PlaylistSongController.create);
   app.put('/api/deletePlaylistSong', PlaylistSongController.update);
   // app.delete('/api/deletePlaylistSong', PlaylistSongController.destroy);

   app.get('/api/artist', ArtistController.show);
   app.get('/api/queryArtist', ArtistController.list);

   app.get('/api/album', AlbumController.show);
   app.get('/api/artistAlbums', AlbumController.listByArtist);
   app.get('/api/queryAlbum', AlbumController.list);

   app.get('/api/song', SongController.show);
   app.get('/api/albumSongs', SongController.listByAlbum);
   app.get('/api/querySong', SongController.list);

   // app.post('/api/createCurrentSong', CurrentSongController.create);
   // app.put('/api/updateCurrentSong/:id', CurrentSongController.update);
   // app.delete('/api/deleteCurrentSong', CurrentSongController.destroy);

};
