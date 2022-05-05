const { context } = require('../base')

module.exports = function (API) {
  class ActionAccessibilityRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActionAccessibilityRequirement] })
}