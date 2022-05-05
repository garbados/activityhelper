const { context } = require('../base')

module.exports = function (API) {
  class Percentile25 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Percentile25] })
}