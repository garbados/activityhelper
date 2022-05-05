const { context } = require('../base')

module.exports = function (API) {
  class ScheduledTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ScheduledTime] })
}