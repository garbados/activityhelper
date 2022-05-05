const { context } = require('../base')

module.exports = function (API) {
  class RecognizedBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecognizedBy] })
}