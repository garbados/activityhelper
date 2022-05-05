const { context } = require('../base')

module.exports = function (API) {
  class GeoEquals extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoEquals] })
}