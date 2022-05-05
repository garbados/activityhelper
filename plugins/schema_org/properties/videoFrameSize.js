const { context } = require('../base')

module.exports = function (API) {
  class VideoFrameSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VideoFrameSize] })
}