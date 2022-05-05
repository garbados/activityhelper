const { context } = require('../base')

module.exports = function (API) {
  class WorstRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorstRating] })
}