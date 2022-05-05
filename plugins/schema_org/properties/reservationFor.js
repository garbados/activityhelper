const { context } = require('../base')

module.exports = function (API) {
  class ReservationFor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReservationFor] })
}