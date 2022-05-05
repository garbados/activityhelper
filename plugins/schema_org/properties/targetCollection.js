const { context } = require('../base')

module.exports = function (API) {
  class TargetCollection extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetCollection] })
}