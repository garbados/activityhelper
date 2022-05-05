const { context } = require('../base')

module.exports = function (API) {
  class EmbedUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmbedUrl] })
}