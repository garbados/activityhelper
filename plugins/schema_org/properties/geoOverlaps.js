const { context } = require('../base')

module.exports = function (API) {
  class GeoOverlaps extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoOverlaps] })
}