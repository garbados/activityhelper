const { context } = require('../base')

module.exports = function (API) {
  class IsVariantOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsVariantOf] })
}