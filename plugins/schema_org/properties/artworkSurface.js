const { context } = require('../base')

module.exports = function (API) {
  class ArtworkSurface extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArtworkSurface] })
}