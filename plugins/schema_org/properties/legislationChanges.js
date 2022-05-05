const { context } = require('../base')

module.exports = function (API) {
  class LegislationChanges extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationChanges] })
}