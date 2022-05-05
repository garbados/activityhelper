const { context } = require('../base')

module.exports = function (API) {
  class BroadcastDisplayName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastDisplayName] })
}