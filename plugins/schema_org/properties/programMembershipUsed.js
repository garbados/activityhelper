const { context } = require('../base')

module.exports = function (API) {
  class ProgramMembershipUsed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProgramMembershipUsed] })
}