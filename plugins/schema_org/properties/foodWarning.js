const { context } = require('../base')

module.exports = function (API) {
  class FoodWarning extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FoodWarning] })
}