const { context } = require('../base')

module.exports = function (API) {
  class DataFeedElement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DataFeedElement] })
}