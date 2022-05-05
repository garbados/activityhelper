const { context } = require('../base')

module.exports = function (API) {
  class EstimatedFlightDuration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EstimatedFlightDuration] })
}