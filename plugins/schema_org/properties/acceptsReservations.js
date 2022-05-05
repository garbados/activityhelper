const { context } = require('../base')

module.exports = function (API) {
  class AcceptsReservations extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcceptsReservations] })
}