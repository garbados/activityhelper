const { context } = require('../base')

module.exports = function (API) {
  class CommentTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CommentTime] })
}