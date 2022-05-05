const { context } = require('../base')

module.exports = function (API) {
  class SpeechToTextMarkup extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SpeechToTextMarkup] })
}