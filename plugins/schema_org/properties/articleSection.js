const { context } = require('../base')

module.exports = function (API) {
  class ArticleSection extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArticleSection] })
}