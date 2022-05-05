const { context } = require('../base')

module.exports = function (API) {
  class PublishedBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublishedBy] })
}