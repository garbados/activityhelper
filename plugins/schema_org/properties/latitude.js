const { context } = require('../base')

module.exports = function (API) {
  class Latitude extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Latitude] })
}