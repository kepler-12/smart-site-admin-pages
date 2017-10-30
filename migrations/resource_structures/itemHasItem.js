
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itemHasItem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id'
        }
      },
      hasItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
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
    return queryInterface.dropTable('itemHasItem', {
      cascade: true
    })
  }

}
