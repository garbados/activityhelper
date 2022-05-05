const { context } = require('../base')

module.exports = function (API) {
  class TargetDescription extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetDescription] })
}