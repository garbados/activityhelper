const { context } = require('../base')

module.exports = function (API) {
  class Surface extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Surface] })
}