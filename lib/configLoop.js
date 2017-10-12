const fs = require('fs')
const log = console.log
const chalk = require('chalk')
const path = require('path')
const configFolder = process.env.CONFIG_FOLDER

if (!configFolder) {
  log(chalk.red(`\n\tThere is no specified config folder.`))
  log(chalk.white(`\tPlease provide a path to a config folder in .env with key CONFIG_FOLDER\n`))
  process.exit()
}

module.exports = (ƒ) => {
  fs
  .readdirSync(configFolder)
  .forEach(file => {
    const contents = require(path.resolve(configFolder, file))
    contents.forEach(ƒ)
  })
}
