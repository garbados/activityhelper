const { context } = require('../base')

module.exports = function (API) {
  class AmenityFeature extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AmenityFeature] })
}