const { context } = require('../base')

module.exports = function (API) {
  class CurrentExchangeRate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CurrentExchangeRate] })
}