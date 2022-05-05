const { context } = require('../base')

module.exports = function (API) {
  class ThumbnailUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ThumbnailUrl] })
}