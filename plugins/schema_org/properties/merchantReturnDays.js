const { context } = require('../base')

module.exports = function (API) {
  class MerchantReturnDays extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MerchantReturnDays] })
}