const { context } = require('../base')

module.exports = function (API) {
  class TourBookingPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TourBookingPage] })
}