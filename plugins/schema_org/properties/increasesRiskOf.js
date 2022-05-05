const { context } = require('../base')

module.exports = function (API) {
  class IncreasesRiskOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncreasesRiskOf] })
}