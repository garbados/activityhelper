const { context } = require('../base')

module.exports = function (API) {
  class ReferenceQuantity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReferenceQuantity] })
}