const { context } = require('../base')

module.exports = function (API) {
  class TargetUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetUrl] })
}