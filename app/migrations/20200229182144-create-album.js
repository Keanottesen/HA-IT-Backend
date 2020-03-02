'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      api_id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      ups: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      release_date: {
        type: Sequelize.DATE
      },
      nb_tracks: {
        type: Sequelize.INTEGER
      },
      contributors: {
        type: Sequelize.JSON
      },
      tracklist: {
        type: Sequelize.STRING
      },
      artist_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Albums');
  }
};
