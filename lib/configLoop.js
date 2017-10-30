const fs = require('fs')
const log = console.log
const chalk = require('chalk')
const path = require('path')
const configFolder = process.env.CONFIG_FOLDER
const folderLoop = require('./folderLoop')

if (!configFolder) {
  log(chalk.red(`\n\tThere is no specified config folder.`))
  log(chalk.white(`\tPlease provide a path to a config folder in .env with key CONFIG_FOLDER\n`))
  process.exit()
}

module.exports = folderLoop(configFolder)
