const { context } = require('../base')

module.exports = function (API) {
  class MakesOffer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MakesOffer] })
}