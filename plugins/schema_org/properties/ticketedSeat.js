const { context } = require('../base')

module.exports = function (API) {
  class TicketedSeat extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TicketedSeat] })
}