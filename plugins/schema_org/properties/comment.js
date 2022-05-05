const { context } = require('../base')

module.exports = function (API) {
  class Comment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Comment] })
}