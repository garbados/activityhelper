const { context } = require('../base')

module.exports = function (API) {
  class RestPeriods extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RestPeriods] })
}