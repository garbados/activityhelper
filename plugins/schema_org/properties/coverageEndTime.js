const { context } = require('../base')

module.exports = function (API) {
  class CoverageEndTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CoverageEndTime] })
}