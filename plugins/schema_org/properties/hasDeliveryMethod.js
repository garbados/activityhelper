const { context } = require('../base')

module.exports = function (API) {
  class HasDeliveryMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasDeliveryMethod] })
}