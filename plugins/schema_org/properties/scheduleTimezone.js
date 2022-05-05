const { context } = require('../base')

module.exports = function (API) {
  class ScheduleTimezone extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ScheduleTimezone] })
}