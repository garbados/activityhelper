const { context } = require('../base')

module.exports = function (API) {
  class GlobalLocationNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GlobalLocationNumber] })
}