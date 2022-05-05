const { context } = require('../base')

module.exports = function (API) {
  class ReturnPolicyCountry extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnPolicyCountry] })
}