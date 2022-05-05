const { context } = require('../base')

module.exports = function (API) {
  class SeatRow extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeatRow] })
}