const { context } = require('../base')

module.exports = function (API) {
  class MemberOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MemberOf] })
}