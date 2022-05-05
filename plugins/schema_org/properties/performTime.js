const { context } = require('../base')

module.exports = function (API) {
  class PerformTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PerformTime] })
}