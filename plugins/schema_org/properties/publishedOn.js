const { context } = require('../base')

module.exports = function (API) {
  class PublishedOn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublishedOn] })
}