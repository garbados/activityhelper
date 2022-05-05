const { context } = require('../base')

module.exports = function (API) {
  class SafetyConsideration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SafetyConsideration] })
}