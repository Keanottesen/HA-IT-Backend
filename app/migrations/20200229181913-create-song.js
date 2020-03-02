'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
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
      duration: {
        type: Sequelize.FLOAT
      },
      preview: {
        type: Sequelize.STRING
      },
      tracklist: {
        type: Sequelize.STRING
      },
      contributors: {
        type: Sequelize.JSON
      },
      album_id: {
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
    return queryInterface.dropTable('Songs');
  }
};
