const { context } = require('../base')

module.exports = function (API) {
  class ProductReturnLink extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductReturnLink] })
}