const { context } = require('../base')

module.exports = function (API) {
  class AddressCountry extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AddressCountry] })
}