const { context } = require('../base')

module.exports = function (API) {
  class TargetProduct extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetProduct] })
}