const { context } = require('../base')

module.exports = function (API) {
  class IsLocatedInSubcellularLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsLocatedInSubcellularLocation] })
}