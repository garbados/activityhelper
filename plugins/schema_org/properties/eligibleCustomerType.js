const { context } = require('../base')

module.exports = function (API) {
  class EligibleCustomerType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EligibleCustomerType] })
}