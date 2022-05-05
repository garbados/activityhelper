const { context } = require('../base')

module.exports = function (API) {
  class ReservedTicket extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReservedTicket] })
}