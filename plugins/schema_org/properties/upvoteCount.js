const { context } = require('../base')

module.exports = function (API) {
  class UpvoteCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UpvoteCount] })
}