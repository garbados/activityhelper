const { context } = require('../base')

module.exports = function (API) {
  class IsGift extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsGift] })
}