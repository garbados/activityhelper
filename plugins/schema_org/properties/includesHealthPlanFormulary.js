const { context } = require('../base')

module.exports = function (API) {
  class IncludesHealthPlanFormulary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludesHealthPlanFormulary] })
}