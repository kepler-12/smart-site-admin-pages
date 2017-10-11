const contentTypes = process.env.CONTENT_TYPES
const log = console.log
const chalk = require('chalk')

if (!contentTypes) {
  log(chalk.red(`\n\tThere is no specified content types in the config file.`))
  log(chalk.white(`\tPlease provide a list (ie CONTENT, TAG) in the .env with key CONTENT_TYPES`))
  log(chalk.white(`\tEach Type should also have an .env key with a path to a config file\n`))
  return;
}

module.exports = contentTypes.split(', ').join(',').split(',')