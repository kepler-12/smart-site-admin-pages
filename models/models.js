const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const contentTypes = require('./lib/contentTypes')

module.export = (db, sequelize) => {
  contentTypes.forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })
}
