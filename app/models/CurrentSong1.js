'use strict';
module.exports = (sequelize, DataTypes) => {

  const CurrentSong = sequelize.define('CurrentSong', {
    song_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    finished_at: DataTypes.DATE
  }, {});

  CurrentSong.associate = function(models) {
    CurrentSong.belongsTo(models.Song, {
      foreignKey: 'song_id',
      as: 'song'
    });
    CurrentSong.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return CurrentSong;
};
