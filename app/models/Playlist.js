'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    owner_user_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.User, {
      foreignKey: 'owner_user_id',
      as: 'user'
    });
    Playlist.hasMany(models.PlaylistSong, {
    foreignKey: 'playlist_id',
    as: 'songs'
    });
  };
  return Playlist;
};
