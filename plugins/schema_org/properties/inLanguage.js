const { context } = require('../base')

module.exports = function (API) {
  class InLanguage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InLanguage] })
}