const { context } = require('../base')

module.exports = function (API) {
  class GeoIntersects extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoIntersects] })
}