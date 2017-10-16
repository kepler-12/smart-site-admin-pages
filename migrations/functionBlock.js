module.exports = (ƒ, ƒName) => {
  return `queryInterface.sequelize.query('CREATE OR REPLACE FUNCTION ${ƒName} ${ƒ} language sql stable`
}
