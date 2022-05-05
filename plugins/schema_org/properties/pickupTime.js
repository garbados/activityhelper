const { context } = require('../base')

module.exports = function (API) {
  class PickupTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PickupTime] })
}