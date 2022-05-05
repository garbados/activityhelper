const { context } = require('../base')

module.exports = function (API) {
  class AmountOfThisGood extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AmountOfThisGood] })
}