const { context } = require('../base')

module.exports = function (API) {
  class EncodingFormat extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EncodingFormat] })
}