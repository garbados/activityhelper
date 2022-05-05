const { context } = require('../base')

module.exports = function (API) {
  class InBroadcastLineup extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InBroadcastLineup] })
}