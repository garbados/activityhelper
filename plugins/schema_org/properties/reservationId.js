const { context } = require('../base')

module.exports = function (API) {
  class ReservationId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReservationId] })
}