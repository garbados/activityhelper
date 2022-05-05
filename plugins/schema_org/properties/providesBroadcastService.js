const { context } = require('../base')

module.exports = function (API) {
  class ProvidesBroadcastService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProvidesBroadcastService] })
}