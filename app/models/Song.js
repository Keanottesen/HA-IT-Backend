'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    api_id: DataTypes.STRING,
    title: DataTypes.STRING,
    duration: DataTypes.FLOAT,
    preview: DataTypes.STRING,
    tracklist: DataTypes.STRING,
    contributors: DataTypes.JSON,
    album_id: DataTypes.STRING,
    artist_id: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.Album, {
      foreignKey: 'album_id',
      as: 'album'
    });
    Song.belongsTo(models.Artist, {
      foreignKey: 'artist_id',
      as: 'artist'
    });
  };
  return Song;
};
