const { context } = require('../base')

module.exports = function (API) {
  class RecipeInstructions extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecipeInstructions] })
}