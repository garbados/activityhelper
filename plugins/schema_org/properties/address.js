const { context } = require('../base')

module.exports = function (API) {
  class Address extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Address] })
}