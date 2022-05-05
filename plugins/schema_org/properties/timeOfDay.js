const { context } = require('../base')

module.exports = function (API) {
  class TimeOfDay extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TimeOfDay] })
}