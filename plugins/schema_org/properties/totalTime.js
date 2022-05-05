const { context } = require('../base')

module.exports = function (API) {
  class TotalTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TotalTime] })
}