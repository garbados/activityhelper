const { context } = require('../base')

module.exports = function (API) {
  class RatingExplanation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RatingExplanation] })
}