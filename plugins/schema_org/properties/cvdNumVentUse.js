const { context } = require('../base')

module.exports = function (API) {
  class CvdNumVentUse extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CvdNumVentUse] })
}