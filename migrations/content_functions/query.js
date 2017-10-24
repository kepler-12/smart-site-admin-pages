module.export = query => {
  return sequelize => sequelize.query(query)
}
