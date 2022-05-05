const { context } = require('../base')

module.exports = function (API) {
  class ReviewAspect extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReviewAspect] })
}