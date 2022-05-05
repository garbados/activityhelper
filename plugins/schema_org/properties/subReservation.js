const { context } = require('../base')

module.exports = function (API) {
  class SubReservation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubReservation] })
}