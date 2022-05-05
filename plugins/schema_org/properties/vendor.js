const { context } = require('../base')

module.exports = function (API) {
  class Vendor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Vendor] })
}