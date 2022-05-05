const { context } = require('../base')

module.exports = function (API) {
  class BookingAgent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BookingAgent] })
}