const { context } = require('../base')

module.exports = function (API) {
  class AddressRegion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AddressRegion] })
}