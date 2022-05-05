const { context } = require('../base')

module.exports = function (API) {
  class Expires extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Expires] })
}