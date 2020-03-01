'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    api_id: DataTypes.STRING,
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    nb_albums: DataTypes.INTEGER,
    tracklist: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
      Artist.hasMany(models.Album, {
      foreignKey: 'api_id',
      as: 'albums',
    });
    Artist.hasMany(models.Song, {
    foreignKey: 'api_id',
    as: 'songs',
    });
  };
  return Artist;
};
