const { context } = require('../base')

module.exports = function (API) {
  class MaximumAttendeeCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaximumAttendeeCapacity] })
}