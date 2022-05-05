const { context } = require('../base')

module.exports = function (API) {
  class HasBroadcastChannel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasBroadcastChannel] })
}