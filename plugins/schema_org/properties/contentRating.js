const { context } = require('../base')

module.exports = function (API) {
  class ContentRating extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContentRating] })
}