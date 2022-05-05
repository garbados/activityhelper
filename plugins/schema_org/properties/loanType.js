const { context } = require('../base')

module.exports = function (API) {
  class LoanType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LoanType] })
}