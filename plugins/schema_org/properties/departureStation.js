const { context } = require('../base')

module.exports = function (API) {
  class DepartureStation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureStation] })
}