const { context } = require('../base')

module.exports = function (API) {
  class Seller extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Seller] })
}