const { context } = require('../base')

module.exports = function (API) {
  class PublishingPrinciples extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PublishingPrinciples] })
}