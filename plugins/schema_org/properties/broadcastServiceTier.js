const { context } = require('../base')

module.exports = function (API) {
  class BroadcastServiceTier extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastServiceTier] })
}