const { context } = require('../base')

module.exports = function (API) {
  class DownvoteCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DownvoteCount] })
}