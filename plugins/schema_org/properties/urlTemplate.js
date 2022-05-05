const { context } = require('../base')

module.exports = function (API) {
  class UrlTemplate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UrlTemplate] })
}