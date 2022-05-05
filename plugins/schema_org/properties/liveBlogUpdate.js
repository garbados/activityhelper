const { context } = require('../base')

module.exports = function (API) {
  class LiveBlogUpdate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LiveBlogUpdate] })
}