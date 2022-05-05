const { context } = require('../base')

module.exports = function (API) {
  class DateReceived extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateReceived] })
}