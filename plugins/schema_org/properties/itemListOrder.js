const { context } = require('../base')

module.exports = function (API) {
  class ItemListOrder extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemListOrder] })
}