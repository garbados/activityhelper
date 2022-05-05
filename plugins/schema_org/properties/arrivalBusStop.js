const { context } = require('../base')

module.exports = function (API) {
  class ArrivalBusStop extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalBusStop] })
}