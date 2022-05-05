const { context } = require('../base')

module.exports = function (API) {
  class ToRecipient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ToRecipient] })
}