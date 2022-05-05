const { context } = require('../base')

module.exports = function (API) {
  class AssociatedMediaReview extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedMediaReview] })
}