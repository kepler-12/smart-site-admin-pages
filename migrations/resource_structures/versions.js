
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      templateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'template',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      html: {
        type: Sequelize.STRING
      },
      css: {
        type: Sequelize.STRING
      },
      js: {
        type: Sequelize.STRING
      },
      file: {
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
    })
      .then(result => {

      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resources')
  }

}
