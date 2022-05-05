const { context } = require('../base')

module.exports = function (API) {
  class NewsUpdatesAndGuidelines extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NewsUpdatesAndGuidelines] })
}