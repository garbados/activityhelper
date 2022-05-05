const { context } = require('../base')

module.exports = function (API) {
  class CommentCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CommentCount] })
}