const { context } = require('../base')

module.exports = function (API) {
  class CvdNumTotBeds extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumTotBeds] })
}