require('dotenv').config()
const configLoop = require('../../lib/configLoop')

module.exports = {
  up (queryInterface, Sequelize) {
    const createResource = require('./createResource')(queryInterface.sequelize)
    return new Promise((resolve, reject) => {
      configLoop(createResource)
    })
  },
  down: (queryInterface, Sequelize) => {

  }
}
