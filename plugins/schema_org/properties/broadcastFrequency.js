const { context } = require('../base')

module.exports = function (API) {
  class BroadcastFrequency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastFrequency] })
}