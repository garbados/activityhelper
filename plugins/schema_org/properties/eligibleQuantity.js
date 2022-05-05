const { context } = require('../base')

module.exports = function (API) {
  class EligibleQuantity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EligibleQuantity] })
}