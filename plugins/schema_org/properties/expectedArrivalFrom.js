const { context } = require('../base')

module.exports = function (API) {
  class ExpectedArrivalFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExpectedArrivalFrom] })
}