const { context } = require('../base')

module.exports = function (API) {
  class DayOfWeek extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DayOfWeek] })
}