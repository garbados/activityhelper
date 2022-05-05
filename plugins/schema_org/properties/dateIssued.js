const { context } = require('../base')

module.exports = function (API) {
  class DateIssued extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateIssued] })
}