const { context } = require('../base')

module.exports = function (API) {
  class ReplyToUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReplyToUrl] })
}