const { context } = require('../base')

module.exports = function (API) {
  class PurchaseDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PurchaseDate] })
}