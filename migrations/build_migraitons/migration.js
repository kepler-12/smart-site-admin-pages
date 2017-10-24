const up = require('./upblock')
const down = require('./downblock')

module.exports = (data) => `
  'use strict'
  module.exports = {
    ${up(data)},
    ${down(data)}
  }
`
