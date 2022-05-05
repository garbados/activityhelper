const { context } = require('../base')

module.exports = function (API) {
  class ProviderMobility extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProviderMobility] })
}