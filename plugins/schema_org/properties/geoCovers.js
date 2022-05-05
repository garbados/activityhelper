const { context } = require('../base')

module.exports = function (API) {
  class GeoCovers extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoCovers] })
}