const { context } = require('../base')

module.exports = function (API) {
  class CarrierRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CarrierRequirements] })
}