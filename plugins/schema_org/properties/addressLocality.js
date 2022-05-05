const { context } = require('../base')

module.exports = function (API) {
  class AddressLocality extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AddressLocality] })
}