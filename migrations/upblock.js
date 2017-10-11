const columnblock = require('./columnBlock')
const timestamps = require('./timestamps')

module.exports = (data) => `
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('${data.name.toLowerCase()}', {    
          ${data.properties.map(columnblock)},${timestamps(data)}
    })
  }
`
