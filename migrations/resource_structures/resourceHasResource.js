
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resourceHasResource', {
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
      hasResourceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resources',
          key: 'id'
        }
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
    return queryInterface.dropTable('resourceHasResource', {
      cascade: true
    })
  }

}
