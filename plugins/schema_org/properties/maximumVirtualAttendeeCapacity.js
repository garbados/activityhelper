const { context } = require('../base')

module.exports = function (API) {
  class MaximumVirtualAttendeeCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaximumVirtualAttendeeCapacity] })
}