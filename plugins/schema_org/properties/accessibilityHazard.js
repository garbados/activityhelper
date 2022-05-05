const { context } = require('../base')

module.exports = function (API) {
  class AccessibilityHazard extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessibilityHazard] })
}