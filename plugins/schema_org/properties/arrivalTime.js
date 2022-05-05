const { context } = require('../base')

module.exports = function (API) {
  class ArrivalTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalTime] })
}