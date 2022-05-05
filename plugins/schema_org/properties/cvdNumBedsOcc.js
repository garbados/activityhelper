const { context } = require('../base')

module.exports = function (API) {
  class CvdNumBedsOcc extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumBedsOcc] })
}