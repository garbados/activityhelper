const { context } = require('../base')

module.exports = function (API) {
  class InventoryLevel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InventoryLevel] })
}