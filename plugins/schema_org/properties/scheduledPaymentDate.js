const { context } = require('../base')

module.exports = function (API) {
  class ScheduledPaymentDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ScheduledPaymentDate] })
}