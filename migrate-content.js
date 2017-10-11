require('dotenv').config()
const fs = require('fs')
const log = console.log
const chalk = require('chalk')
const migration = require('./migrations/migration')
const contentTypes = require('./lib/contentTypes')

contentTypes.forEach((type) => {
  const contentConfig = process.env[`${type}_CONFIG`]
  if (!contentConfig) {
    log(chalk.red(`\n\tThere is no specified ${type.toLowerCase()} config file.`))
    log(chalk.white(`\tPlease provide a path to a config file in .env with key ${type}_CONFIG\n`))
    return false
  }
  const migrationFolder = process.env.MIGRATIONS
  if (!migrationFolder) {
    log(chalk.red(`\n\tThere is no specified migration folder`))
    log(chalk.white(`\tPlease provide a path to the migrations folder .env with key MIGRATIONS\n`))
    return false
  }

  const contents = require(contentConfig)
  contents.forEach((data) => {
    fs.writeFileSync(`${migrationFolder}/${migrationDate()}-create-${data.name.toLowerCase()}.js`, migration(data))
  })
})

function migrationDate () {
  const d = new Date()
  const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth()
  const day = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth()
  return `${d.getFullYear()}${toZero(d.getMonth())}${toZero(d.getDay())}${toZero(d.getHours())}${toZero(d.getMinutes())}${toZero(d.getSeconds())}`
}

function toZero (zerome) {
  return `${zerome}`.length < 2 ? `0${zerome}` : zerome
}
