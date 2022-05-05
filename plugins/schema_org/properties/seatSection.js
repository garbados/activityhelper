const { context } = require('../base')

module.exports = function (API) {
  class SeatSection extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeatSection] })
}