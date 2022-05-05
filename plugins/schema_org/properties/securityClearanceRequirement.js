const { context } = require('../base')

module.exports = function (API) {
  class SecurityClearanceRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SecurityClearanceRequirement] })
}