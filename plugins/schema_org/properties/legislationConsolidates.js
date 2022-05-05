const { context } = require('../base')

module.exports = function (API) {
  class LegislationConsolidates extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationConsolidates] })
}