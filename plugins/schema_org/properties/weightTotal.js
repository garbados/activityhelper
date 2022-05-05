const { context } = require('../base')

module.exports = function (API) {
  class WeightTotal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WeightTotal] })
}