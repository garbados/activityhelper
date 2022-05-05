const { context } = require('../base')

module.exports = function (API) {
  class WebFeed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WebFeed] })
}