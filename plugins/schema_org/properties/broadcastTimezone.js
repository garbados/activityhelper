const { context } = require('../base')

module.exports = function (API) {
  class BroadcastTimezone extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastTimezone] })
}