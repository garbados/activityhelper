const { context } = require('../base')

module.exports = function (API) {
  class EventSchedule extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EventSchedule] })
}