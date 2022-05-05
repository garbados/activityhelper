const { context } = require('../base')

module.exports = function (API) {
  class LegislationDateVersion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationDateVersion] })
}