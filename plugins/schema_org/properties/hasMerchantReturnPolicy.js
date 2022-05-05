const { context } = require('../base')

module.exports = function (API) {
  class HasMerchantReturnPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMerchantReturnPolicy] })
}