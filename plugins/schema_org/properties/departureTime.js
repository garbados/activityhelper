const { context } = require('../base')

module.exports = function (API) {
  class DepartureTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureTime] })
}