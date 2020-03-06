'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
      User.hasMany(models.Playlist, {
      foreignKey: 'id',
      as: 'playlists',
    });
  };
  return User;
};
