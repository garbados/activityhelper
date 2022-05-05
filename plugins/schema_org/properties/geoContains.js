const { context } = require('../base')

module.exports = function (API) {
  class GeoContains extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoContains] })
}