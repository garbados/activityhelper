const { context } = require('../base')

module.exports = function (API) {
  class LodgingUnitType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LodgingUnitType] })
}