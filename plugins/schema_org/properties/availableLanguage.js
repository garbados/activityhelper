const { context } = require('../base')

module.exports = function (API) {
  class AvailableLanguage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableLanguage] })
}