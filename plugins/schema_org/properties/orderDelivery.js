const { context } = require('../base')

module.exports = function (API) {
  class OrderDelivery extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderDelivery] })
}