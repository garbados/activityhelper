const { context } = require('../base')

module.exports = function (API) {
  class KnowsLanguage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [KnowsLanguage] })
}