const { context } = require('../base')

module.exports = function (API) {
  class AggregateRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AggregateRating] })
}