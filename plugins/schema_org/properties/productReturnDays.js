const { context } = require('../base')

module.exports = function (API) {
  class ProductReturnDays extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductReturnDays] })
}