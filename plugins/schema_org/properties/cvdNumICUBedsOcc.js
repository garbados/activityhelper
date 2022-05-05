const { context } = require('../base')

module.exports = function (API) {
  class CvdNumICUBedsOcc extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumICUBedsOcc] })
}