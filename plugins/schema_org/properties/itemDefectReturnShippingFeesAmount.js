const { context } = require('../base')

module.exports = function (API) {
  class ItemDefectReturnShippingFeesAmount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemDefectReturnShippingFeesAmount] })
}