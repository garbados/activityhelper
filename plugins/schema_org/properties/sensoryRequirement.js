const { context } = require('../base')

module.exports = function (API) {
  class SensoryRequirement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SensoryRequirement] })
}