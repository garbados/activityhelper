const { context } = require('../base')

module.exports = function (API) {
  class SpatialCoverage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SpatialCoverage] })
}