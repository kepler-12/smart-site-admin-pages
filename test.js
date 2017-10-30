require('dotenv').config()
const baseQuery = require('./migrations/content_functions/query');
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION
})

require('./migrations/content_functions/items/itemByName')(sequelize)({
    name: 'Authors'
})
.then(console.log)
.catch(console.log)
