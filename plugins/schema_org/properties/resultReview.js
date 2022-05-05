const { context } = require('../base')

module.exports = function (API) {
  class ResultReview extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ResultReview] })
}