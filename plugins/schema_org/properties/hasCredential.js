const { context } = require('../base')

module.exports = function (API) {
  class HasCredential extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasCredential] })
}