const { context } = require('../base')

module.exports = function (API) {
  class HealthCondition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthCondition] })
}