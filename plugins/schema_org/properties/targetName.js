const { context } = require('../base')

module.exports = function (API) {
  class TargetName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetName] })
}