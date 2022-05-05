const { context } = require('../base')

module.exports = function (API) {
  class CoverageStartTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CoverageStartTime] })
}