const { context } = require('../base')

module.exports = function (API) {
  class AssociatedClaimReview extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedClaimReview] })
}