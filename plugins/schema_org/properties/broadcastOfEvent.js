const { context } = require('../base')

module.exports = function (API) {
  class BroadcastOfEvent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastOfEvent] })
}