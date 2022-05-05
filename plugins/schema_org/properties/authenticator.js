const { context } = require('../base')

module.exports = function (API) {
  class Authenticator extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Authenticator] })
}