const { context } = require('../base')

module.exports = function (API) {
  class EligibilityToWorkRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EligibilityToWorkRequirement] })
}