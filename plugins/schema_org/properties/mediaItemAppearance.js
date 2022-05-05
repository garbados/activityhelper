const { context } = require('../base')

module.exports = function (API) {
  class MediaItemAppearance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MediaItemAppearance] })
}