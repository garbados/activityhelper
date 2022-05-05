const { context } = require('../base')

module.exports = function (API) {
  class ItemCondition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemCondition] })
}