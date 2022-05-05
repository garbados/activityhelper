const { context } = require('../base')

module.exports = function (API) {
  class LegislationType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegislationType] })
}