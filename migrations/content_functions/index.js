require('dotenv').config()
const configLoop = require('../../lib/configLoop')

module.exports = {
  up (queryInterface, Sequelize) {
    console.log('up up')
    const itemByName = require('./items/itemByName')(queryInterface.sequelize)
    console.log('up up up')

    const itemQuery = require('./contentQueries/index')(queryInterface.sequelize)
    return new Promise((resolve, reject) => {
      configLoop(resource => {
        itemByName(resource)
        console.log("resouce prop", typeof resource.properties)
        resource.properties.forEach((field) => {
          console.log(typeof field.name, resource.name, field.name)
          itemQuery(field, resource)
        })
      })
    })
  },
  down: (queryInterface, Sequelize) => {

  }
}
