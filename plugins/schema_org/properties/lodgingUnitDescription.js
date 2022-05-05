const { context } = require('../base')

module.exports = function (API) {
  class LodgingUnitDescription extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LodgingUnitDescription] })
}