const { context } = require('../base')

module.exports = function (API) {
  class Carrier extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Carrier] })
}