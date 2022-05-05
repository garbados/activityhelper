const { context } = require('../base')

module.exports = function (API) {
  class Gtin12 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Gtin12] })
}