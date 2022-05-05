const { context } = require('../base')

module.exports = function (API) {
  class OrderQuantity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderQuantity] })
}