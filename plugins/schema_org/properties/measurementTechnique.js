const { context } = require('../base')

module.exports = function (API) {
  class MeasurementTechnique extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MeasurementTechnique] })
}