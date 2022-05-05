const { context } = require('../base')

module.exports = function (API) {
  class YearlyRevenue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [YearlyRevenue] })
}