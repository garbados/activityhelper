const { context } = require('../base')

module.exports = function (API) {
  class BestRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BestRating] })
}