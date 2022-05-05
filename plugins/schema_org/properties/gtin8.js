const { context } = require('../base')

module.exports = function (API) {
  class Gtin8 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gtin8] })
}