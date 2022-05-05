const { context } = require('../base')

module.exports = function (API) {
  class ReviewBody extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReviewBody] })
}