const { context } = require('../base')

module.exports = function (API) {
  class Buyer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Buyer] })
}