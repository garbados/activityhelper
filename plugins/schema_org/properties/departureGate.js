const { context } = require('../base')

module.exports = function (API) {
  class DepartureGate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DepartureGate] })
}