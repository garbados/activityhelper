const { context } = require('../base')

module.exports = function (API) {
  class AccessibilityControl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessibilityControl] })
}