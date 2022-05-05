const { context } = require('../base')

module.exports = function (API) {
  class RatingCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RatingCount] })
}