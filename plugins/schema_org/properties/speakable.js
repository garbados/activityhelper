const { context } = require('../base')

module.exports = function (API) {
  class Speakable extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Speakable] })
}