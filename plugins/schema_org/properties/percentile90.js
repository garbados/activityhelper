const { context } = require('../base')

module.exports = function (API) {
  class Percentile90 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Percentile90] })
}