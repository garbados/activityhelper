const { context } = require('../base')

module.exports = function (API) {
  class ReviewCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReviewCount] })
}