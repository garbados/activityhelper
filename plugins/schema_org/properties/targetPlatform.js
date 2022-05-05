const { context } = require('../base')

module.exports = function (API) {
  class TargetPlatform extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetPlatform] })
}