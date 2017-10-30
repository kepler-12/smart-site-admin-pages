module.exports = (folder) => {
  return (ƒ) => {
    fs
      .readdirSync(folder)
      .forEach(file => {
        console.log(path.resolve(folder, file))
        const contents = require(path.resolve(configFolder, file))
        contents.forEach(ƒ)
      })
  }
}
