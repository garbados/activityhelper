const { context } = require('../base')

module.exports = function (API) {
  class MembershipNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MembershipNumber] })
}