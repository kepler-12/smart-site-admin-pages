
  'use strict'
  module.exports = {

    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('sizes', {

        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        type: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.JSON
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('sizes')
    }

  }
