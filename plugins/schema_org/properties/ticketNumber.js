const { context } = require('../base')

module.exports = function (API) {
  class TicketNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TicketNumber] })
}