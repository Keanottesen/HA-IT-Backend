'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {
    song_id: DataTypes.INTEGER,
    playlist_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {});
  PlaylistSong.associate = function(models) {
    PlaylistSong.belongsTo(models.Playlist, {
      foreignKey: 'playlist_id',
      as: 'playlist'
    });
    PlaylistSong.belongsTo(models.Song, {
      foreignKey: 'song_id',
      as: 'song'
    });
  };
  return PlaylistSong;
};
