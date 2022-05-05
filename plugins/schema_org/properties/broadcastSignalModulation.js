const { context } = require('../base')

module.exports = function (API) {
  class BroadcastSignalModulation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastSignalModulation] })
}