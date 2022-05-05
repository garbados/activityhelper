const { context } = require('../base')

module.exports = function (API) {
  class ItemShipped extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemShipped] })
}