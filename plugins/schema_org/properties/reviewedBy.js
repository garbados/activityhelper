const { context } = require('../base')

module.exports = function (API) {
  class ReviewedBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReviewedBy] })
}