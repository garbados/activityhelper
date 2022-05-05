const { context } = require('../base')

module.exports = function (API) {
  class Elevation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Elevation] })
}