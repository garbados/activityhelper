const { context } = require('../base')

module.exports = function (API) {
  class FoodEstablishment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FoodEstablishment] })
}