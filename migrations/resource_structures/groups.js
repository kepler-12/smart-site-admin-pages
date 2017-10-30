
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
      resourceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resources',
          key: 'id'
        }
      },
      name: {
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
    return queryInterface.dropTable('groups', {
      cascade: true
    })
  }

}
