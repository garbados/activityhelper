const { context } = require('../base')

module.exports = function (API) {
  class BookingTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BookingTime] })
}