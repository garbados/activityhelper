const { context } = require('../base')

module.exports = function (API) {
  class ReturnPolicySeasonalOverride extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnPolicySeasonalOverride] })
}