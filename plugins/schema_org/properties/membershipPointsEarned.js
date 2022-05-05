const { context } = require('../base')

module.exports = function (API) {
  class MembershipPointsEarned extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MembershipPointsEarned] })
}