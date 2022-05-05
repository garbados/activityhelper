const { context } = require('../base')

module.exports = function (API) {
  class GeoCrosses extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeoCrosses] })
}