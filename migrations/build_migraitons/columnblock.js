module.exports = (property) => {
  const name = property.name
  const data = Object.assign({}, property)
  delete data.name

  data.type = `Sequelize.${data.type}`
  const dataString = JSON.stringify(data)
    .split(',').join(',\n          ')
    .split('{').join('{\n          ')
    .split('}').join('\n        }')
    .split(':').join(': ')
    .split('"').join('')

  return `\n    ${name}: ${dataString}`
}
