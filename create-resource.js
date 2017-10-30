require('dotenv').config()
const configLoop = require('./lib/configLoop')
const folderLoop = require('./lib/folderLoop')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION
})

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

// Create Resource from Folder
const CreateResourceFromFolder = fucntion (folder)
{
 folderLoop(folder) 
}

// Create Resource From File

// Create Resource From Command Line

// Add Fields From File

// Add Fields From File