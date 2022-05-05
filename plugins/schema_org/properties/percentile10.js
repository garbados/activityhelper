const { context } = require('../base')

module.exports = function (API) {
  class Percentile10 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Percentile10] })
}