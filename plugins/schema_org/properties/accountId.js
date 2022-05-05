const { context } = require('../base')

module.exports = function (API) {
  class AccountId extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccountId] })
}