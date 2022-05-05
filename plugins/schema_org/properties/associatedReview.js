const { context } = require('../base')

module.exports = function (API) {
  class AssociatedReview extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedReview] })
}