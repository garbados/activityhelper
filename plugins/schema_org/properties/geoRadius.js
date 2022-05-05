const { context } = require('../base')

module.exports = function (API) {
  class GeoRadius extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoRadius] })
}