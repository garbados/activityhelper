const { context } = require('../base')

module.exports = function (API) {
  class AccessibilityFeature extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessibilityFeature] })
}