const { context } = require('../base')

module.exports = function (API) {
  class BroadcastSubChannel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastSubChannel] })
}