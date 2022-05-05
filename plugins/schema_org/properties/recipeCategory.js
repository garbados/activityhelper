const { context } = require('../base')

module.exports = function (API) {
  class RecipeCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecipeCategory] })
}