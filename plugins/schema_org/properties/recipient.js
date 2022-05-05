const { context } = require('../base')

module.exports = function (API) {
  class Recipient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Recipient] })
}