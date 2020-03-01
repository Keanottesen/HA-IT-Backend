'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    api_id: DataTypes.STRING,
    title: DataTypes.STRING,
    ups: DataTypes.STRING,
    cover: DataTypes.STRING,
    label: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    nb_tracks: DataTypes.INTEGER,
    contributors: DataTypes.JSON,
    tracklist: DataTypes.STRING,
    artist_id: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
      Album.hasMany(models.Song, {
      foreignKey: 'api_id',
      as: 'songsInAlbum',
    });
      Album.belongsTo(models.Artist, {
        foreignKey: 'artist_id',
        as: 'artist'
      });
  };
  return Album;
};
