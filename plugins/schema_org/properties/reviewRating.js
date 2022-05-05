const { context } = require('../base')

module.exports = function (API) {
  class ReviewRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReviewRating] })
}