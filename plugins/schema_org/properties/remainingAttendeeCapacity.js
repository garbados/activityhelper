const { context } = require('../base')

module.exports = function (API) {
  class RemainingAttendeeCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RemainingAttendeeCapacity] })
}