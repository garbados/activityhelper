const { context } = require('../base')

module.exports = function (API) {
  class LegislationResponsible extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationResponsible] })
}