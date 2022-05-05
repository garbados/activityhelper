const { context } = require('../base')

module.exports = function (API) {
  class LegislationLegalForce extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationLegalForce] })
}