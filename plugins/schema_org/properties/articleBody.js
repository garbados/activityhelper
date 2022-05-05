const { context } = require('../base')

module.exports = function (API) {
  class ArticleBody extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArticleBody] })
}