const { context } = require('../base')

module.exports = function (API) {
  class Merchant extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Merchant] })
}