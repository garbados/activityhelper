const { context } = require('../base')

module.exports = function (API) {
  class GeoCoveredBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoCoveredBy] })
}