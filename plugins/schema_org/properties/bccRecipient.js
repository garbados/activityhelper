const { context } = require('../base')

module.exports = function (API) {
  class BccRecipient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BccRecipient] })
}