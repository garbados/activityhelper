const { context } = require('../base')

module.exports = function (API) {
  class PublisherImprint extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublisherImprint] })
}