const { context } = require('../base')

module.exports = function (API) {
  class AccessibilitySummary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessibilitySummary] })
}