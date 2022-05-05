const { context } = require('../base')

module.exports = function (API) {
  class EventStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EventStatus] })
}