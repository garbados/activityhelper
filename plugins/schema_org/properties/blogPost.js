const { context } = require('../base')

module.exports = function (API) {
  class BlogPost extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BlogPost] })
}