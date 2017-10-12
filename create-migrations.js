require('dotenv').config()
const fs = require('fs')
const log = console.log
const chalk = require('chalk')
const migration = require('./migrations/migration')
const config_folder = process.env.CONFIG_FOLDER
const path = require('path')
const configLoop = require('./lib/configLoop')

const migrationFolder = process.env.MIGRATIONS
if (!migrationFolder) {
  log(chalk.red(`\n\tThere is no specified migration folder`))
  log(chalk.white(`\tPlease provide a path to the migrations folder .env with key MIGRATIONS\n`))
  process.exit()
}

const migrations = fs.readdirSync(migrationFolder)
console.log(migrations)
configLoop((data) => {
  const migrationFile = migrations.filter(migrationFile => {
    return migrationFile.match(`.*create-${data.name.toLowerCase()}.js`) !== null
  })
  let file = `${migrationDate()}-create-${data.name.toLowerCase()}.js`
    // TODO: Add column check here.
  if (migrationFile && migrationFile[0]) {
    file = migrationFile[0]
  }
  console.log(file)
  fs.writeFileSync(`${migrationFolder}/${file}`, migration(data))
})

function migrationDate () {
  const d = new Date()
  return `${d.getFullYear()}${toZero(d.getMonth() + 1)}${toZero(d.getDate())}${toZero(d.getHours())}${toZero(d.getMinutes())}${toZero(d.getSeconds())}`
}

function toZero (zerome) {
  return `${zerome}`.length < 2 ? `0${zerome}` : zerome
}

