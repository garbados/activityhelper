const { context } = require('../base')

module.exports = function (API) {
  class ByMonthDay extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ByMonthDay] })
}