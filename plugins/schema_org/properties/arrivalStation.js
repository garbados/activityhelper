const { context } = require('../base')

module.exports = function (API) {
  class ArrivalStation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArrivalStation] })
}