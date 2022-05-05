const { context } = require('../base')

module.exports = function (API) {
  class CcRecipient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CcRecipient] })
}