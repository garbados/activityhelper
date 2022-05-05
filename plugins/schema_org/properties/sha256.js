const { context } = require('../base')

module.exports = function (API) {
  class Sha256 extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Sha256] })
}