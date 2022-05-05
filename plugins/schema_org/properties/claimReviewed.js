const { context } = require('../base')

module.exports = function (API) {
  class ClaimReviewed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ClaimReviewed] })
}