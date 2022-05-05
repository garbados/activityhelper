const { context } = require('../base')

module.exports = function (API) {
  class AccountMinimumInflow extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccountMinimumInflow] })
}