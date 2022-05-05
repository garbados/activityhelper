const { context } = require('../base')

module.exports = function (API) {
  class RecipeIngredient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecipeIngredient] })
}