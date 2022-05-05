const { context } = require('../base')

module.exports = function (API) {
  class CashBack extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CashBack] })
}