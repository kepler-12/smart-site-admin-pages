require('dotenv').config()
console.log(typeof process.env.CONTENT)

module.exports = {
  models: require('./models/models'),
  migrations: require('./migrations/resource_structures'),
  contentFunctions: require('./migrations/content_functions/index')
}
