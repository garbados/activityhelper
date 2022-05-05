const { context } = require('../base')

module.exports = function (API) {
  class AdvanceBookingRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AdvanceBookingRequirement] })
}