const { context } = require('../base')

module.exports = function (API) {
  class IsConsumableFor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsConsumableFor] })
}