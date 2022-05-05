const { context } = require('../base')

module.exports = function (API) {
  class Grantee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Grantee] })
}