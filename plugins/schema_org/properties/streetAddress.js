const { context } = require('../base')

module.exports = function (API) {
  class StreetAddress extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StreetAddress] })
}