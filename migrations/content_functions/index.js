require('dotenv').config()
const configLoop = require('./lib/configLoop')

module.exports = {
  up: (queryInterface, Sequelize) => {
    configLoop(resource => {
      require('./items/itemByName')(queryInterface.sequelize)(resource)
      const itemQuery = require('./contentQueries/index')(queryInterface.sequelize)
      resource.properties.forEach((field) => {
        itemQuery(field)
      })
    })
  },
  down: (queryInterface, Sequelize) => {

  }
}
