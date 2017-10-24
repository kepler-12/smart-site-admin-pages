const migrations = [
  require('./resources'),
  require('./resourceHasResource'),
  require('./groups'),
  require('./templates'),
  require('./versions'),
  require('./items'),
  require('./itemHasItem'),
  require('./itemVersions'),
  require('./content')
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      runNextMigration(0)
      function runNextMigration (count) {
        console.log(count, migrations.length, count <= migrations.length - 1);
        if (count <= migrations.length - 1) {
          migrations[count].up(queryInterface, Sequelize)
          .then(r => { 
            count++
            console.log(count)
            runNextMigration(count) 
          })
          .catch(console.log)
        } else {
          resolve(true)
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    migrations.reverse()
    return new Promise((resolve, reject) => {
      runNextMigration(0)
      function runNextMigration (count) {
        console.log(count, migrations.length, count <= migrations.length - 1)
        if (count <= migrations.length - 1) {
          migrations[count].down(queryInterface, Sequelize)
          .then(r => {
            count++
            console.log(count)
            runNextMigration(count)
          })
          .catch(console.log)
        } else {
          resolve(true)
        }
      }
    })
  }
}
