const { context } = require('../base')

module.exports = function (API) {
  class ArtMedium extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArtMedium] })
}