const { context } = require('../base')

module.exports = function (API) {
  class OrderStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderStatus] })
}