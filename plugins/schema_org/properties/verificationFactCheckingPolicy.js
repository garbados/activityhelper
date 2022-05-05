const { context } = require('../base')

module.exports = function (API) {
  class VerificationFactCheckingPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VerificationFactCheckingPolicy] })
}