const { context } = require('../base')

module.exports = function (API) {
  class LegislationTransposes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationTransposes] })
}