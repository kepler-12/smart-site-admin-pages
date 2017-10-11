module.exports = (data) => {
  if (data.timestamps !== false) {
    return `
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },`
  }
}
