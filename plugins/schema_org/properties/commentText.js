const { context } = require('../base')

module.exports = function (API) {
  class CommentText extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CommentText] })
}