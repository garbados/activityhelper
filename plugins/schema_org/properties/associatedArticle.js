const { context } = require('../base')

module.exports = function (API) {
  class AssociatedArticle extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssociatedArticle] })
}