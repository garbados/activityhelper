const { context } = require('../base')

module.exports = function (API) {
  class AnnualPercentageRate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AnnualPercentageRate] })
}