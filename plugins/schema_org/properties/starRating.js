const { context } = require('../base')

module.exports = function (API) {
  class StarRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StarRating] })
}