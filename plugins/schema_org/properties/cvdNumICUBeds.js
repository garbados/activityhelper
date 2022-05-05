const { context } = require('../base')

module.exports = function (API) {
  class CvdNumICUBeds extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumICUBeds] })
}