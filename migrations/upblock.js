const columnblock = require('./columnBlock')
const functionBlock = require('./functionBlock')
const timestamps = require('./timestamps')

module.exports = (data) => `
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('${data.name.toLowerCase()}', {    
          ${data.properties.map(columnblock)},${timestamps(data)}
    })
    .then(result => {
      ${data.functions.map(functionBlock)}
    })
    .catch(console.log);

  }
`
