const { context } = require('../base')

module.exports = function (API) {
  class Option extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Option] })
}