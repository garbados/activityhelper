const { context } = require('../base')

module.exports = function (API) {
  class DiscussionUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiscussionUrl] })
}