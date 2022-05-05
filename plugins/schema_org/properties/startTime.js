const { context } = require('../base')

module.exports = function (API) {
  class StartTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StartTime] })
}