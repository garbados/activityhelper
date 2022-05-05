const { context } = require('../base')

module.exports = function (API) {
  class AccessibilityAPI extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessibilityAPI] })
}