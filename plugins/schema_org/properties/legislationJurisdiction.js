const { context } = require('../base')

module.exports = function (API) {
  class LegislationJurisdiction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationJurisdiction] })
}