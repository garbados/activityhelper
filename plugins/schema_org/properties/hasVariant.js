const { context } = require('../base')

module.exports = function (API) {
  class HasVariant extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasVariant] })
}