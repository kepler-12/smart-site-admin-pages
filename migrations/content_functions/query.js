
module.exports = sequelize => {
  console.log(`querying`)  
  return query => { 
    return sequelize.query(query)
  }
}
