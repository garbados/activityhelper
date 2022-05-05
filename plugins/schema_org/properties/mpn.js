const { context } = require('../base')

module.exports = function (API) {
  class Mpn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Mpn] })
}