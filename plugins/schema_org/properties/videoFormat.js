const { context } = require('../base')

module.exports = function (API) {
  class VideoFormat extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VideoFormat] })
}