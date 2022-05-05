const { context } = require('../base')

module.exports = function (API) {
  class LastReviewed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LastReviewed] })
}