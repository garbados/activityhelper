const { context } = require('../base')

module.exports = function (API) {
  class TargetPopulation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TargetPopulation] })
}