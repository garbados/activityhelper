const { context } = require('../base')

module.exports = function (API) {
  class Gtin13 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gtin13] })
}