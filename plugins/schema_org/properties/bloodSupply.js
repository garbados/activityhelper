const { context } = require('../base')

module.exports = function (API) {
  class BloodSupply extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BloodSupply] })
}