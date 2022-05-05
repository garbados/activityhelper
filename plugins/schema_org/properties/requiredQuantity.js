const { context } = require('../base')

module.exports = function (API) {
  class RequiredQuantity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiredQuantity] })
}