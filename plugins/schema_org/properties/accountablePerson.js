const { context } = require('../base')

module.exports = function (API) {
  class AccountablePerson extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccountablePerson] })
}