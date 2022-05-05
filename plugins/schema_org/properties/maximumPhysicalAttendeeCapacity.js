const { context } = require('../base')

module.exports = function (API) {
  class MaximumPhysicalAttendeeCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaximumPhysicalAttendeeCapacity] })
}