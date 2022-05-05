const { context } = require('../base')

module.exports = function (API) {
  class Gtin14 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gtin14] })
}