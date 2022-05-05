const { context } = require('../base')

module.exports = function (API) {
  class Nutrition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Nutrition] })
}