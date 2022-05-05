const { context } = require('../base')

module.exports = function (API) {
  class OrderItemNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderItemNumber] })
}