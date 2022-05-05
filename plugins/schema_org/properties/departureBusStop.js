const { context } = require('../base')

module.exports = function (API) {
  class DepartureBusStop extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureBusStop] })
}