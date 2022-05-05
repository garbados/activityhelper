const { context } = require('../base')

module.exports = function (API) {
  class EmbeddedTextCaption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmbeddedTextCaption] })
}