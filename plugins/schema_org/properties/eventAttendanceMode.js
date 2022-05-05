const { context } = require('../base')

module.exports = function (API) {
  class EventAttendanceMode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EventAttendanceMode] })
}