const { context } = require('../base')

module.exports = function (API) {
  class PublicAccess extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublicAccess] })
}