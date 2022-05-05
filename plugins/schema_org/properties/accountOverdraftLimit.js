const { context } = require('../base')

module.exports = function (API) {
  class AccountOverdraftLimit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccountOverdraftLimit] })
}