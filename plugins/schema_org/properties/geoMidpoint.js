const { context } = require('../base')

module.exports = function (API) {
  class GeoMidpoint extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoMidpoint] })
}