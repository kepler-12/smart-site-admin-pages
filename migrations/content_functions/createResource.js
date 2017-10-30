module.exports = sequelize => {
  const itemByName = require('./items/itemByName')(sequelize)
  const itemQuery = require('./contentQueries/index')(sequelize)
  return resource => {
    itemByName(resource)
    console.log("resouce prop", typeof resource.properties)
    resource.properties.forEach((field) => {
      console.log(typeof field.name, resource.name, field.name)
      itemQuery(field, resource)
    })
  }
}
