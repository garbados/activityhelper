const { context } = require('../base')

module.exports = function (API) {
  class IncludesHealthPlanNetwork extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludesHealthPlanNetwork] })
}