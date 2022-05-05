const { context } = require('../base')

module.exports = function (API) {
  class Polygon extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Polygon] })
}