const { context } = require('../base')

module.exports = function (API) {
  class Percentile75 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Percentile75] })
}