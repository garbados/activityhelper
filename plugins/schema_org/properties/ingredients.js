const { context } = require('../base')

module.exports = function (API) {
  class Ingredients extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Ingredients] })
}