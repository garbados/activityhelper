const { context } = require('../base')

module.exports = function (API) {
  class TemporalCoverage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TemporalCoverage] })
}