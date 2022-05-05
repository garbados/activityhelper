const { context } = require('../base')

module.exports = function (API) {
  class MerchantReturnLink extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MerchantReturnLink] })
}