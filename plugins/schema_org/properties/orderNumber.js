const { context } = require('../base')

module.exports = function (API) {
  class OrderNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderNumber] })
}