const { context } = require('../base')

module.exports = function (API) {
  class ItemReviewed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemReviewed] })
}