require('dotenv').config()
console.log(typeof process.env.CONTENT)

module.exports = {
  models: require('./models/models')
}
