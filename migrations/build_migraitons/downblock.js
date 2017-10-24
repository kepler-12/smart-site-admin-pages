module.exports = (data) => `
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('${data.name.toLowerCase()}')
}
`
