const { context } = require('../base')

module.exports = function (API) {
  class CredentialCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CredentialCategory] })
}