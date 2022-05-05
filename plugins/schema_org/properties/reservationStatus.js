const { context } = require('../base')

module.exports = function (API) {
  class ReservationStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReservationStatus] })
}