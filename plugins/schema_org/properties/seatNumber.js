const { context } = require('../base')

module.exports = function (API) {
  class SeatNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeatNumber] })
}