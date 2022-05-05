const { context } = require('../base')

module.exports = function (API) {
  class AvailabilityStarts extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailabilityStarts] })
}