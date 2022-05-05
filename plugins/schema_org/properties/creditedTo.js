const { context } = require('../base')

module.exports = function (API) {
  class CreditedTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CreditedTo] })
}