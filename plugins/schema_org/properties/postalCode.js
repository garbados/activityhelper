const { context } = require('../base')

module.exports = function (API) {
  class PostalCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostalCode] })
}