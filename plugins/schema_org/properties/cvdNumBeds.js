const { context } = require('../base')

module.exports = function (API) {
  class CvdNumBeds extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumBeds] })
}