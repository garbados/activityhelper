const { context } = require('../base')

module.exports = function (API) {
  class NonProprietaryName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NonProprietaryName] })
}