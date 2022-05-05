const { context } = require('../base')

module.exports = function (API) {
  class LegislationLegalValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationLegalValue] })
}