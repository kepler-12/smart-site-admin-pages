require('dotenv').config()
const Sequelize = require('sequelize')
const configLoop = require('../lib/configLoop')

module.exports = (db, sequelize) => {
  configLoop(data => {
    data.properties = data.properties.map(property => {
      property.type = Sequelize[property.type]
      return property
    })
    db[data.name] = sequelize.define(data.name.toLowerCase, data.properties)
  })
  console.log(db)
}

