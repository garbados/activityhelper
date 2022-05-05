const { context } = require('../base')

module.exports = function (API) {
  class Bed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Bed] })
}