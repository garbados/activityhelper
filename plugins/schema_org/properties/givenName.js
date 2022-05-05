const { context } = require('../base')

module.exports = function (API) {
  class GivenName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GivenName] })
}