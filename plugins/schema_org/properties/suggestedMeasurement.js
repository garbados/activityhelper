const { context } = require('../base')

module.exports = function (API) {
  class SuggestedMeasurement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedMeasurement] })
}