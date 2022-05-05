const { context } = require('../base')

module.exports = function (API) {
  class BlogPosts extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BlogPosts] })
}