const { context } = require('../base')

module.exports = function (API) {
  class SdDatePublished extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SdDatePublished] })
}