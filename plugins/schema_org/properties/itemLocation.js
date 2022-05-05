const { context } = require('../base')

module.exports = function (API) {
  class ItemLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemLocation] })
}