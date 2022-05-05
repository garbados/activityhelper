const { context } = require('../base')

module.exports = function (API) {
  class Encodings extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Encodings] })
}