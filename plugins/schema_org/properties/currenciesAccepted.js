const { context } = require('../base')

module.exports = function (API) {
  class CurrenciesAccepted extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CurrenciesAccepted] })
}