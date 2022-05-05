const { context } = require('../base')

module.exports = function (API) {
  class RecommendationStrength extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecommendationStrength] })
}