const { context } = require('../base')

module.exports = function (API) {
  class ArrivalGate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalGate] })
}