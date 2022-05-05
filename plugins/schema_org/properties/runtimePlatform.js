const { context } = require('../base')

module.exports = function (API) {
  class RuntimePlatform extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RuntimePlatform] })
}