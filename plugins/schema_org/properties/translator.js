const { context } = require('../base')

module.exports = function (API) {
  class Translator extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Translator] })
}