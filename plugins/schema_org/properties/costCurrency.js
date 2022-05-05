const { context } = require('../base')

module.exports = function (API) {
  class CostCurrency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CostCurrency] })
}