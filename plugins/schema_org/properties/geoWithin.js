const { context } = require('../base')

module.exports = function (API) {
  class GeoWithin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoWithin] })
}