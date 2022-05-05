const { context } = require('../base')

module.exports = function (API) {
  class HasMeasurement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMeasurement] })
}