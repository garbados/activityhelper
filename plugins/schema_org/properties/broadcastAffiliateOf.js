const { context } = require('../base')

module.exports = function (API) {
  class BroadcastAffiliateOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BroadcastAffiliateOf] })
}